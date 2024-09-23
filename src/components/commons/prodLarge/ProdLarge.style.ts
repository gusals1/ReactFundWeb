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
  aspect-ratio: 320/355;
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
  color: #aaaaaa;
  font-size: 13px;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
