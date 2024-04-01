import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
position:sticky;
top:12vh;

${mobile({display:"none"})};

`
const Wrapper = styled.div`
height:38vh;
width:100%;

display:flex;
margin-left:30%;
margin-top:10%;
flex-direction:column;
justify-content:space-between;
margin-bottom:15px;
font-size:14px;

&:hover{
  
  cursor:pointer;
  
  } 


`
const Community = styled.div`
border-radius:10px;
width:100%;
font-size:16px;
 display:flex;
 align-items:center;
 &:hover{
  background-color: #ededeb;
  cursor:pointer;
  
  } 


`
const Logo = styled.div`
height:20px;
width:20px;
margin-right:10px;
border-radius:50%;
background-color:${(props)=>props.color };
color:white;


`

const Desc = styled.div`
display:flex;
flex-direction:column;

`
const Name = styled.div`
 font-weight:100;
 
`
const No = styled.span`
margin-right:5px;
`


const Title = styled.div`
margin-top:0px;
margin-left:30px;
font-size:12px;
font-weight:400;
color:gray;
`
const Follow = styled.div`
color:grey;
font-size:13px;
`

const Communities = () => {
  return (
   <Container>
    
    <Title>POPULAR COMMUNITIES</Title>
    <Wrapper>
     <Community>
      <Logo color="grey">tlre</Logo>
      <Desc><Name>r/DensityTheGame</Name><Follow><No>2,990,853</No>members</Follow></Desc>
     </Community>
     <Community>
      <Logo color="#8c1904">Y2</Logo>
      <Desc><Name>r/Anime</Name><Follow><No>2,990,853</No>members</Follow></Desc>
     </Community>
     <Community>
      <Logo color ="#1b9648">RE</Logo>
      <Desc><Name>r/density2</Name><Follow><No>2,990,853</No>members</Follow></Desc>
     </Community>
     <Community>
      <Logo color="teal">IT</Logo>
      <Desc><Name>r/dndnext</Name><Follow><No>2,990,853</No>members</Follow></Desc>
     </Community>   
     <Community>
      <Logo color ="#1b9648">TO</Logo>
      <Desc><Name>r/ForteNiteBr</Name><Follow><No>2,990,853</No>members</Follow></Desc>
     </Community>
     See more
     </Wrapper>
     
   </Container>
  )
}

export default Communities