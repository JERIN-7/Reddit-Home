import React from 'react';
import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import InfoIcon from '@mui/icons-material/Info';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import Cards from './Cards';
import { mobile } from '../responsive';

const BigContainer = styled.div`

  display:flex;
  ${mobile({position:"relative"})};
  
`

const Container = styled.div` 
position:sticky;
top:46px;
height:100vh;
 width:38%;
  border-right: 1px solid lightgray;
  ${mobile({display:"none"})};


`;

const Up = styled.div`
height:10%;
border-bottom: 1px solid lightgray;
padding:20px ;
display:flex;
justify-content:space-between;
  
flex-direction:column;
font-family: "Gayathri", sans-serif;
  font-weight: 500;
  font-style: normal;

`
const Main = styled.button`
padding:10px;
height: 50px;
display:flex;
align-items:center;
border-radius:10px;
border:none;
background:none;

&:hover{
background-color: #ededeb;
cursor:pointer;

} 


`
const Home = styled(HomeOutlinedIcon)`
  margin-right:15px; 
`
const Trending = styled(TrendingUpOutlinedIcon)`
margin-right:15px;
`
const Center = styled.div`
height:50%;
border-bottom:1px solid lightgray;
`

const Title = styled.div`
padding-right:25px;
font-family: "Quicksand", sans-serif;

margin-left:30px;
margin-top:20px;
display:flex;
justify-content:space-between;
margin-bottom:20px;
`
const GenereWrapper = styled.div`

display:flex;
flex-direction:column;

`
const Genere = styled.button`
display:flex;
align-items:center;
padding: 10px 25px;
position:relative;
border-radius:10px;
border:none;
background:none;

&:hover{
background-color: #ededeb;
cursor:pointer;

} 

`
const GameIcon = styled(SportsEsportsOutlinedIcon,)`
  margin-right: 10px; /* Adjust the margin-right as needed */
`;
const BallIcon = styled(SportsBaseballOutlinedIcon)`
margin-right: 10px;
`
const Bicon = styled(BusinessOutlinedIcon)`
margin-right:10px;
`
const Cicon = styled(HubOutlinedIcon)`
margin-right:10px;
`
const Ticon = styled(TvOutlinedIcon)`
margin-right:10px;
`
const Sicon = styled(GradeOutlinedIcon)`
margin-right:10px;
`
const DownArrow = styled(KeyboardArrowDownOutlinedIcon)`
position:absolute;
right:10px;

margin-right:10px;
`
const More = styled.button`
margin-left:30px;
margin-top:5px;
font-size:8;
border-radius:10px;
border:none;
background:none;
padding:10px;
&:hover{
background-color: #ededeb;
cursor:pointer;

} 

`

const Down = styled.div`



`
const About = styled(InfoIcon)`
margin-right:10px;
`
const Advertise = styled(CampaignOutlinedIcon)`
margin-right:10px;
`
const Help = styled(ContactSupportOutlinedIcon)`
margin-right:10px;
`
const Blog = styled(AutoStoriesOutlinedIcon)`
margin-right:10px;
`
const Tool = styled(BuildOutlinedIcon)`
margin-right:10px;
`

const Body = () => {
  return (
    <BigContainer>
    <Container>
      <Up>
        <Main><Home/>  Home</Main>
        <Main><Trending/>  Popular</Main>
      </Up>
      <Center>
        <Title>Topics <KeyboardArrowUpOutlinedIcon/></Title>
        <GenereWrapper>
        <Genere><GameIcon/> Gaming <DownArrow/></Genere>
        <Genere><BallIcon/>Sports<DownArrow/></Genere>
        <Genere><Bicon/>Buisness<DownArrow/></Genere>
        <Genere><Cicon/>Crypto<DownArrow/></Genere>
        <Genere><Ticon/>Television<DownArrow/></Genere>
        <Genere><Sicon/>Celebrity<DownArrow/></Genere>
        </GenereWrapper>
        <More>see more</More>
      </Center>
      <Down>
       <Title>Resources <KeyboardArrowUpOutlinedIcon/></Title>
       <GenereWrapper>
        <Genere><About/>About Redit </Genere>
        <Genere><Advertise/>Advertise</Genere>
        <Genere><Help/>Help</Genere>
        <Genere><Blog/>Blog</Genere>
        <Genere><Tool/>Carrers</Genere>
   
        </GenereWrapper>
      </Down>
    </Container>
 
      <Cards/>
      
    
    </BigContainer>
    
    
  );
};

export default Body;
