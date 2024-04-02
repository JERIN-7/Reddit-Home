import React from 'react'
import styled from 'styled-components'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { mobile } from '../responsive';







const Container = styled.div`
height:80vh;
width:60%;  
margin-left:8%;
border-top:0.5px solid lightgrey;
border-radius:20px;
&:hover{
    background-color: #ededeb;
    cursor:pointer;
    
    } 

    ${mobile({width:"100%",marginLeft:"0px",height:"60vh",marginRight:"0px",marginBottom:"15px"})};


`
const Wrapper = styled.div`
padding: 5px 20px;     
${mobile({padding:"0px"})};

`
const Title = styled.div`
display:flex;
align-items:center;

${mobile({marginTop:"10px"})};
`
const Logo = styled.div`
  height:20px;
  width:20px;
  border-radius:50%;
  background-color: ${({ $bgr }) => $bgr};
  color:white;
  margin-right:5px;
`;
const Name = styled.div`
font-weight:300;
font-size:12px;
margin-right:10px;

`

const Duration = styled.div`
font-weight:300;
font-size:12px;
color:grey;

`
const Join = styled.div`
display:flex;
${mobile({position:"absolute",right:"20px",marginTop:"10px"})};
`

const Button = styled.button`
margin-left:440px;
height:20px;
width:45px;
margin-right:10px;
border-radius:20px;
background-color:#240194;
color:white;
border:none;
font-weight:600;
${mobile({height:"30px",width:"50px",fontSize:'16px'})};


`
const Dots = styled(MoreHorizOutlinedIcon)`
font-size:15px;
font-weight:100;
`
const Desc = styled.div`
align-text:center;
margin-top:15px;
margin-bottom:10px;
font-size:18px;
font-weight:600;

`
const Image = styled.img`
width: 70%;
transform:translateX(20%);
height:100%;

`;

const ImageWrapper = styled.div`
${mobile({marginTop:"10px",height:"40vh"})};
height:60vh;
background-color:black;
border-radius:20px;
`
const Extra = styled.div`
display:flex;
 align-items:center;
 margin-top:10px;
`
const Vote = styled.div`
margin-left:20px;
margin-top:5px;
background-color: #ededeb;
width: 10%;
display:flex;
border-radius:20px;
justify-content:space-between;
${mobile({width:"20%"})};

`
const Comments = styled.div`
justify-content:space-between;
display:flex;
width:5%;
padding-right:10px;
background-color: #ededeb;
margin-left:20px;
border-radius:20px;
${mobile({marginLeft:"40px",paddingRight:"30px"})};
`
const Share = styled.div`
display:flex;
background-color: #ededeb;
margin-left:20px;
padding-right:10px;
${mobile({marginLeft:"40px"})};
border-radius:20px;
`

const Post = ({image, description, name,bg,lg}) => {
  return (
    <Container>
    <Wrapper>
         <Title>
          <Logo $bgr ={bg}>{lg}</Logo>
          <Name>{name}</Name>
          <Duration>. 3 days ago</Duration>
          <Join>
           <Button>join</Button>
           <Dots/>
          </Join>

         </Title>
          <Desc>{description}</Desc>
         <ImageWrapper>
       <Image src={image}></Image> 
      </ImageWrapper>
   </Wrapper>   
   <Extra>
       <Vote>
   <ArrowUpwardOutlinedIcon/>
       54
     <ArrowDownwardOutlinedIcon/>
     </Vote>
     <Comments>
       <ModeCommentOutlinedIcon/>
       48
     </Comments>
     <Share>
       <FileUploadOutlinedIcon/>
       Share
     </Share>
   </Extra>
   </Container>
  )
}

export default Post