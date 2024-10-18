import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 90px auto;
`;

export const Sidebar = styled.aside`
  width: 20%;
  padding: 40px;
  background-color: #f0f0f0;
  border-radius: 10px 0 0 10px;
  border: 1px solid #d9d9d9;
`;

export const Content = styled.div`
  width: 80%;
  padding: 40px;
  border: 1px solid #d9d9d9;
  border-left: none;
  border-radius: 0 10px 10px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
