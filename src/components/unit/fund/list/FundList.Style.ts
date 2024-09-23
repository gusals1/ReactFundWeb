import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapItem = styled.div`
  max-width: 1200px;
  margin: 90px auto;
  padding: 0 95px;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 30px;
  align-items: flex-end;
`;
export const Title = styled.h2`
  font-size: 28px;
  color: #4c4c4d;
  margin-right: 20px;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  color: #4c4c4d;
  margin-bottom: 2px;
`;

export const ProdWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const ProdWrapHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const SubBanner = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 0 auto 90px;
  position: relative;
  aspect-ratio: 1200 / 160;
`;
export const ImageWrap = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  aspect-ratio: 1010 / 400;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;
