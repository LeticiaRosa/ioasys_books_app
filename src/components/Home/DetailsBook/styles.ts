import styled from "styled-components";
import Close from "../../../assets/Close.svg";
import Quotes from "../../../assets/Quotes.svg";

interface ImageBookProps {
  url: string | null;
}

export const ContainerModal = styled.div`
  display: ${(props) => (props.isOpen === false ? "none" : "flex")};
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0 auto;
`;

export const BoxDetailsBook = styled.div`
  position: absolute;
  width: 90%;
  height: 80%;
  max-width: 769px;
  min-height: 408px;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
`;

export const ButtonClose = styled.i`
  position: absolute;
  background-image: url("${Close}");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  align-items: center;
  justify-content: center;
  -o-background-size: cover;
  width: 32px;
  height: 32px;
  top: 16px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: end;
  display: flex;
`;

export const ImageBook = styled.i<ImageBookProps>`
  background-image: url("${(props) => props.url || "gray"}");
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  width: 100%;
  height: 95%;
`;

export const InfoBook = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 8px;

  .title {
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    /* identical to box height, or 143% */
    color: #333333;
  }
  .authors {
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */

    color: #ab2680;
    margin-bottom: 20px;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  span {
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
    /* or 238% */
    text-transform: uppercase;
    color: #333333;
  }
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-align: right;

    color: #999999;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const ContainerResenha = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  span {
    font-family: "Heebo";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
    /* or 238% */
    text-transform: uppercase;
    color: #333333;
  }
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-transform: uppercase;

    color: #333333;
  }
`;

export const ImgQuotes = styled.i`
  background-image: url("${Quotes}");
  width: 100%;
  height: 100%;
`;
