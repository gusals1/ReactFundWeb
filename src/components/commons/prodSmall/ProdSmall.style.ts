import styled from "@emotion/styled";

export const Wrap = styled.div`
  max-width: 230px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ProdName = styled.h4`
  font-size: 15px;
  color: #4c4c4d;
  margin: 5px 0;
`;
export const ProdText = styled.p`
  color: #666666;
`;

export const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin: 8px 0 20px 0;
`;

export const Percent = styled.p`
  font-size: 15px;
  color: #85dfff;
  font-weight: bold;
  margin-right: 10px;
`;

export const Price = styled.p`
  font-size: 12px;
  color: #9a9a9a;
`;

export const Date = styled.p`
  position: absolute;
  top: 15%;
  right: 0;
  padding: 1px 3px;
  background: #85dfff;
  border-radius: 3px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
`;

export const BoldLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
