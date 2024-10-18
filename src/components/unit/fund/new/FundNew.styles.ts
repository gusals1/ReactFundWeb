import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 150px auto 80px auto;
  height: 65vh; // 화면 중앙 배치
`;

export const ProdImage = styled.div`
  max-width: 360px;
  margin: auto;
  border-radius: 10px;
  aspect-ratio: 360/140;
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const QuestionText = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 28px;
  color: #4c4c4d;
`;

export const BoxContainer = styled.div`
  width: 60%;
  display: flex;
  margin: 80px auto;
  justify-content: space-around;
`;

export const OptionBox = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 15px;
  :hover {
    background-color: #85dfff;
    color: #fff;
    border: 1px solid #85dfff;
  }
`;

export const OptionText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
