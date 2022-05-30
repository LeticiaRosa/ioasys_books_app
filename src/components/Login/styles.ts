/* app.js */
import createGlobalStyle from "styled-components";
import Logo from '../../assets/Logo.png';
import { Heebo } from "../../styles/tokens/fonts";

/*ContainerTitle*/ 
export const ContainerHeader = createGlobalStyle.div`
    ${Heebo}
    width: 120px;
    height: 36px;
    left: 8.42%;
    top: 35.68%;
    position: absolute;
    
    p{
        font-size: 28px;
        font-style: normal;
        font-weight: 300;
        line-height:40px;
        color: #FFFFFF;
        position: absolute;
        left: 14.42%;
        top: 35.68%;
        margin-left: 100px;
       
        
    }
`;
 /* Logo */
export const ImgLogo = createGlobalStyle.div`
        background-image: url('${Logo}');
        background-repeat: no-repeat;
        position: absolute;
        left: 8.42%;
        right: 83.94%;
        top: 35.68%;
        bottom: 59.64%; 
        width: 104.4px;
        height: 36px;
`;

export const ContainerForm = createGlobalStyle.form`
    position: absolute;
    width: 90%;
    height: 60px;
    left: 8.42%;
    top: 45.68%;
    
`;

/* Container Email */
export const ContainerEmail = createGlobalStyle.div`
    
    width: 90%;
    max-width: 368px;
    height: 60px;
    left: 8.42%;
    top: 45.68%;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;

    

    p{
        padding-top: 10px;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        opacity: 0.5;
        margin-left: 16px;
        margin-top:8px;
    }
    
    /* Password */
    input[type="e-mail"] {
        position: absolute;
        box-shadow: 0 0 0 0;
        outline: 0;
        background-color: transparent;
        border: 0 ;
        color: #333;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 24px;
        font-style: bold;
        margin-left: 16px;
        width: 90%;   
    }
    input[type="e-mail"]::-webkit-input-placeholder{
        color: #FFFFFF;
        font-family: 'Heebo', sans-serif;
    }
`;


export const ContainerSenha = createGlobalStyle.div`
   
    width: 90%;
    max-width: 368px;
    height: 60px;
    left: 8.42%;
    top: 52.68%;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 4px;
    
    p{
        padding-top: 10px;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        opacity: 0.5;
        margin-left: 16px;
        margin-top:8px;
        
    }
    
    /* Password */
    input[type="password"] {
        position: absolute;
        box-shadow: 0 0 0 0;
        outline: 0;
        background-color: transparent;
        border: 0 ;
        color: #333;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 24px;
        font-style: bold;
        margin-left: 16px;
        width: 90%;
        
    }
    input[type="password"]::-webkit-input-placeholder{
        color: #FFFFFF;
        font-family: 'Heebo', sans-serif;
    }

    /* Enviar */
    input[type="submit"] {
        position: absolute;
        border-radius: 44px;
        width: 85px;
        border: 0;
        height: 36px;       
        background: #FFFFFF;
        cursor:pointer;
        color: #B22E6F;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 20px; 
        font-style: bold;
        margin-left: 72%;
        margin-top: -4%;
        
    }
    @media only screen and (max-width: 410px) {
        input[type="submit"] {
            margin-left: 69%;
            
        }
    }
    @media only screen and (max-width: 365px) {
        input[type="submit"] {
            margin-left: 60%;
        }
    }
    
    
`;