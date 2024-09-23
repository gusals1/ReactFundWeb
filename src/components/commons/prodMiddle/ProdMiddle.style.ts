import styled from "@emotion/styled";
import Image from "next/image";

export const Wrap = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ProdImage = styled.div`
  width: 320px;
  border-radius: 10px;
  aspect-ratio: 320/200;
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const ProdName = styled.h4`
  font-size: 15px;
  color: #4c4c4d;
  margin: 5px 0;
`;
export const ProdText = styled.p`
  color: #666666;
`;

export const OpenDay = styled.p`
  font-size: 13px;
  color: #85dfff;
  font-weight: 500;
  margin-right: 10px;
  margin: 5px 0 15px 0;
`;

export const BoldLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
