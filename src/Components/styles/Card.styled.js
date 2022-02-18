import styled  from "styled-components"

 export const StyledCard = styled.div`
    display: flex;
align-items: center;
background-color: #fff;
border-radius: 15px;
padding:60px;
margin:40px 0;
flex-direction:${({layout}) => layout || 'row' };
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
 
 img{
     width:80%;
 }
 & > div{
     flex:1;
 }
 @media(max-width: ${({theme}) => theme.mobile}){
     flex-direction:column;
 }
 `

 