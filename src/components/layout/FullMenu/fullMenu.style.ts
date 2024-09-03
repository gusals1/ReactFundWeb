import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px; /* 전체 화면 높이 */
  display: flex;
  cursor: pointer;
  flex-direction: row;
  background-image: linear-gradient(to right, #5c5c5c 50%, #cccccc 50%);
`;
export const InnerBox = styled.div`
  width: 1200px;
  height: 100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const HalfMenu = styled.h1`
  width: 50%;
  font-size: 2rem;
  font-weight: 600;

  :first-child {
    padding-left: 3%;
    color: #fff;
    background: url("/navImage/arrow.png") no-repeat 70% center;
  }
  :last-child {
    padding-left: 7%;
    color: #4c4c4d;
    background: url("/navImage/arrow.png") no-repeat 85% center;
  }
`;
