import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {mobile} from '../responsive'

const Container = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 0.5px solid lightgray;
  height: 45px;
  z-index: 1000;
  background-color:white;
   
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1.8;
  
`;

const Image = styled.img`
  height: 40px;
  width: 120px;
  ${mobile({width:"95px"})};
`;

const Center = styled.div`
  flex: 3;
  position: relative;
  
`;

const Input = styled.input`
  width: 70%;
  height: 35px;
  border-radius: 20px;
  border: none;
  background-color: #ededeb;
  padding-left: 40px; /* Add some padding to adjust for the icon */
  ::placeholder {
    font-size: 20px; /* Change the font size of the placeholder */
    font-weight: 200;
  }
  ${mobile({width:"55%", paddingRight:"5px"})};
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  margin-left: 10px;
  font-size: 24px; /* Change the font size of the search icon */
`;

const Right = styled.div`
   flex:1;
  display: flex;
  align-items: center;
`;

const Button1 = styled.button`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #ededeb;
  border: none;
  height: 40px;
  width: 100px;
  justify-content: space-between;
  padding-right: 15px;
  font-weight: 600; 
  margin-right: 20px;
  cursor: pointer;
  ${mobile({display:"none"})};

`;




const Button2 = styled.button`
  border-radius: 20px;
  background-color: #db2504;
  border: none;
  height: 40px;
  width: 70px;
  color: white;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({position:"absolute",right:"0px"})};

`;
const More = styled(MoreHorizIcon)`
  ${mobile({visibility:"hidden"})};
`;




const UpperNav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={logo} alt="Logo" />
        </Left>
        <Center>
          <Input type="text" placeholder="Search Reddit" />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Center>
        <Right>
          <Button1>
            <QrCodeScannerIcon /> Get App
          </Button1>
          <Button2>Log In</Button2>
          <More/>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default UpperNav;
