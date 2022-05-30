import styled from "styled-components";
import Background from "../../assets/1st Background.png";

interface ImageBookProps {
  url: string | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 272px;
  height: 160px;
  left: 979px;
  top: 120px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  border: 0;
  padding: 10px;
  cursor: pointer;
`;

export const ImageBook = styled.i<ImageBookProps>`
  background-image: url("${(props) => props.url || "gray"}");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  align-items: center;
  justify-content: center;
  -o-background-size: cover;
  width: 80%;
  height: 100%;
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
    font-size: 14px;
    line-height: 20px;
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
  }
`;

export const ContainerDescription = styled.div`
  margin-top: 10px;
  position: relative;
  top: 5px;
  .pageCount,
  .publisher,
  .published {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    color: #999999;
  }
`;
