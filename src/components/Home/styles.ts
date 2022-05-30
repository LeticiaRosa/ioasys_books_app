import styled from "styled-components";
import Background from "../../assets/1st Background.png";
import Logo from "../../assets/Logo_Black.png";
import Logout from "../../assets/Log Out.svg";
import Next from "../../assets/Next.svg";
import Back from "../../assets/Prev.svg";
import { Heebo } from "../../styles/tokens/fonts";

/* 1st Background */
export const BackgroundStyle = styled.i`
  ${Heebo}
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-image: url("${Background}");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  align-items: center;
  justify-content: center;
  -o-background-size: cover;
`;

/*ContainerHeader*/
export const ContainerHeader = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 5%;
  height: 45px;
  font-family: "Heebo";
`;

export const Container = styled.div`
  display: flex;
  p {
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    color: #333333;
  }
`;
/* ImgLogo */
export const ImgLogo = styled.i`
  background-image: url("${Logo}");
  background-repeat: no-repeat;
  width: 150px;
  height: 36px;
`;

/* LogOut */
export const LogOut = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding-right: 10px;
  }

  @media only screen and (max-width: 600px) {
    p {
      display: none;
    }
  }
`;

export const ImgLogOut = styled.i`
  background-image: url("${Logout}");
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 10px;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid: 100% 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const ContainerFooter = styled.div`
  justify-content: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-right: 5%;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #333333;
`;

export const ImgNext = styled.i`
  background-image: url("${Next}");
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 10px;
`;

export const ImgBack = styled.i`
  background-image: url("${Back}");
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 10px;
`;
