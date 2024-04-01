import React from 'react'
import styled from 'styled-components'
import Communities from './Communities';
import Post from './Post';
import { mobile } from '../responsive';


const Horizon = styled.div`
 display:flex;
 flex-wrap:wrap;
    
  ${mobile({position:"absolute",left  :"0px",top:"44vh",marginBottom:"0px",width:"100%"})};

` 
const Posts = () => {
  return (
    <Horizon>
      
      <Post image="https://preview.redd.it/aadujeevitham-wont-be-having-subtitles-for-the-arabic-and-v0-m7vd8v9sn2qc1.jpeg?auto=webp&s=dea29a61c9261a8cc8c39975799ac0be7acc427d"
 description = "Aadujeevitham won’t be having subtitles for the Arabic and Somalian dialogues"
 name= "r/Movies" bg ="purple" lg = "ma"/>
    <Communities/>
    <Post image="https://img-9gag-fun.9cache.com/photo/a0ZZBMn_700bwp.webp"
 description = "Henry Cavill takes a 7 Year old to School!"
 name= "r/Smile" bg ="black" lg ="lc"/>
 <Post image="https://thecricketlounge.com/wp-content/uploads/2024/03/IMG_7422-768x461.webp"
 description = "SRH sets the record for highest run in ipl!"
 name= "r/ipl2024" bg ="#1a1d78" lg ="ipl"/>
    </Horizon>
   
  )
} 

export default Posts
