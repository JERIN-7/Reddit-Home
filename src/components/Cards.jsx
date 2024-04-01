    import React from 'react'
    import styled from 'styled-components'
    import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
    import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
    import Post from './Posts';
    import { mobile } from '../responsive';
    const Feed = styled.div`
      display:flex;
      flex-direction:column;
      &::-webkit-scrollbar {
        /* Hides the scrollbar for Webkit (Chrome, Safari, etc.) */
        display: none;
      }
      
      ${mobile({minWidth:"100%",overflowX:"scroll"})};
    
    `
    const Container = styled.div`
    width: 100%;
    height: 42vh;
    position: relative;

    
   
    


    `
     


    const Wrapper = styled.div`
    height:80%;
      width:100%;
      display: flex;
      padding-left: 100px;
      padding-top: 20px;
    
      ${mobile({paddingLeft:"0px",paddingTop:"10px",width:"300vw"})};
     

    `

    const Card = styled.div`
      
      width: 25%; /* Set width to 25% of the container width */
      margin-right: 20px; /* Add margin between cards */
      height: 90%; /* Maintain the same height as specified in Container */
      position:relative;
      cursor:pointer;
      ${mobile({width:"80vw",height:"100%"})};
      
      
    `

    const Image = styled.img`
      width: 100%; /* Make the image take up the full width of its container */
      height: 100%; /* Make the image take up the full height of its container */
      object-fit: cover; /* Ensure the image covers the entire container */
      border-radius: 20px;
      
    `

    const Info = styled.div`
    display:flex;
    flex-direction:column;
    border-radius:20px;
    position:absolute;
    padding-left:10px;
    left:0;
    top:0;
    width:  96%;
    height:100%;
    background-color:rgba(0,0,0,0.3);
    `

    const Title = styled.h2`
    margin-top:45%;
    color:white;
    margin-bottom:5px;
    font-weight:700;
    ${mobile({fontSize:"22px"})};

    `
    const Desc = styled.span`
    font-size:15px;
    font-weight:400;
    margin-bottom:10px;
    color:white;

    `
    const Source = styled.div`
    display:flex;
    color:grey;
    font-size:12px;
    `
    const Icon = styled.span`
    color:white;
      height:20px;
      width:20px;
      background-color: ${(props)=> props.color};
      border-radius:50%;
      margin-right:10px;
      

    `
    const Name = styled.span`
    color:white;
    margin-right:10px;
    font-size:12px;
    font-weight:700;
    `
    const Tags = styled.div`
    display:flex;
    postion:absolute;
    left:0; 
    align-items:center;
    font-size:13px;
    color:grey;
    
    ${mobile({transform:"translateX(-26%)",marginTop:"10px"})};

    `

    const Text1 = styled.div`
    padding-left:110px;

    `
    const Text2 = styled.div`
      margin-left:20px;
      
    `
    const Compart = styled(ViewStreamOutlinedIcon)`
    margin-left:20px;

    `
    
    const Cards = () => {
      return (
        <Feed>
        <Container>
        
          <Wrapper>
            <Card> 
              <Image src='https://e3.365dm.com/24/03/640x380/skynews-kate-catherine-wales_6498098.jpg?20240322173926' />
              <Info>
                <Title> Kate  Middleton Cancer</Title> 
                <Desc> Kate,Princess of wales,reveals she is...</Desc>
                <Source><Icon color="red">hfh</Icon><Name>r./unitedKingdom</Name> and more</Source>
              
              </Info>
            </Card>  
            <Card> 
              <Image src='https://pbs.twimg.com/ext_tw_video_thumb/1771313352272392192/pu/img/I7HJngPmMwStem_f.jpg:large'/>
              <Info>
                <Title>Yale Stuns Auburn</Title> 
                <Desc> Chaotic final possesion of Yale-Aburn</Desc>
                <Source><Icon color = "pink"></Icon><Name>r./CollegeBasketball</Name> and more</Source>
              
              </Info>
            </Card>  
            <Card> 
              <Image src='https://static.theprint.in/wp-content/uploads/2024/03/Russia_794-696x464.jpg?compress=true&quality=80&w=376&dpr=2.6' />
              <Info>
                <Title>Moscow attack</Title> 
                <Desc> Rusia arrests suspected attackers after..</Desc>
                <Source><Icon color="blue">Rn</Icon><Name>r./worldnews</Name> and more</Source>
              
              </Info>
            </Card>  
            <Card> 
              <Image src='https://culturacolectiva.com/wp-content/uploads/2024/02/joker-2-nuevas-fotos-joaquin-phoenix-y-lady-gaga.jpg' />
              <Info>
                <Title>Joker 2 new detail</Title> 
                <Desc> joker 2 is reportedly'mostly a..</Desc>
                <Source><Icon color="grey"></Icon><Name>r./boxoffice</Name> and more</Source>
              
              </Info>
            </Card>  
          </Wrapper>  
          <Tags><Text1>Hot</Text1><KeyboardArrowDownOutlinedIcon/>
          <Text2>India</Text2><KeyboardArrowDownOutlinedIcon/>
          <Compart/><KeyboardArrowDownOutlinedIcon/>
          
          
          </Tags> 
        </Container>
        
        
           <Post/>
        </Feed>
      )
    }

    export default Cards
