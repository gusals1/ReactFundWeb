import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px; /* 전체 화면 높이 */
  display: flex;
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
export const LeftMenu = styled.div`
  width: 600px;
`;
