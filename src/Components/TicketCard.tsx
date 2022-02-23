import React from 'react'
import styled from "styled-components"

function TicketCard(props: { winningSum: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <Container>
        WinningSum: {props.winningSum}
    </Container>
  )
}

export default TicketCard

const Container=styled.div`
    width:100%;
    background-color:pink;
    height:300px;
    border-radius: 10px;
    margin:0 0 10px;
`;