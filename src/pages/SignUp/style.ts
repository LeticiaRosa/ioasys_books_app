/* app.js */
import styled from "styled-components";
import BackgroundImagePink from '../../assets/Background Image.png';
import Logo from '../../assets/Logo.png';
import { Heebo } from "../../styles/tokens/fonts";




/*GlobalStyle*/
export const GlobalStyle = styled.div`
    ${Heebo}
    background-image: url('${BackgroundImagePink}');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
    line-height:40px;
    }

    html{ 
        @media (min-width: 1080px){
            font-sizing:93.75%;
        }

        @media (min-width: 720px){
            font-sizing:87.5%;
    }
    }
    body, input, textarea , button {
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight:600;
    }

    button{
        cursor:pointer;
    }   
`;
