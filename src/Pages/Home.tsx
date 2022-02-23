import React from 'react'
import Header from "../Components/Header"
import {Navigate} from "react-router-dom";
import styled from "styled-components";
import TicketCard from "../Components/TicketCard"
import getOpenTickets from '../Api/getOpenTickets';
import {useState,useEffect} from "react";

function Home() {

  const [openTickets,setOpenTickets]=useState([]);


  //will run only one time when component is loaded
  useEffect(() => {
    async function onLoad(){
      const res=await getOpenTickets(localStorage.getItem("token"));
      if(res.result){
        //handle success
        console.log(res.data);
        setOpenTickets(res.data);
      }else{
        //handle error
        console.log(res.error);
      }
    }
    onLoad();
  },[])
  
  return (
    <div>
    {!localStorage.getItem("token") && <Navigate to="/"/>}
        <Header/>
        <Container>
          <Tickets>
            {openTickets.map((obj:{_id:string,winningSum:number})=><TicketCard  key={obj._id} {...obj}/>)}
          </Tickets>
          <Info>
              <h2>DASHBOARD</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Your Wallet:</td>
                    <td>1000 💰</td>
                  </tr>
                  <tr>
                    <td>Participated Bids:</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Past Bids:</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Won Bids:</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>

              <News>
                <h2>Latest News</h2>
                <div>
                  <b>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </b>
                  <p>Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                </div>
                <div>
                  <b>Latin literature from 45 BC, making it over 2000 years old</b>
                  <p>Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure </p>
                </div>
              </News>
          </Info>
        </Container>
    </div>
  )
}

export default Home

const Container=styled.div`
  
  display:flex;
  align-items:start;
  padding:50px 200px;
  @media only screen and (max-width:768px){
    flex-direction: column-reverse;
  }
`;

const Tickets=styled.div`
  width:100%;
  padding:0 20px;
`;

const Info=styled.div`
  position:sticky;
  top:0px;
  width:100%;
  max-width:400px;
  margin:0 auto;
  background-color:#1BA94C;
  padding:15px;
  color:white;
  font-size: 18px;
  border-radius:10px;

  @media only screen and (max-width:768px){
    max-width:768px;
    position: static;
  }

  table{
    width:100%;
    margin:20px 0;
  }
  td:last-child{
    text-align:right;
  }

`;

const News=styled.div`
  color:black;
  background-color:#EEEDDE;
  border-radius: 5px;
  padding:5px;

  &>div{
    padding:5px;
    border:2px solid #008E89;
    margin:10px 0;
  }

  @media only screen and (max-width: 768px) {
    display:none;
  }
`;