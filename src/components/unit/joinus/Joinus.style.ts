import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import Image from "next/image";

const InputStyled = css`
  width: 100%;
  height: 45px;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 70px auto 100px;
`;

export const Logo = styled.div`
  width: 200px;
  margin-right: auto;
  aspect-ratio: 200/85;
  position: relative;
  margin-bottom: 20px;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const SignUpForm = styled(Form)`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const InputId = styled(Input)`
  ${InputStyled}
`;
export const InputPassword = styled(Input.Password)`
  ${InputStyled}
`;

export const StyledFormItem = styled(Form.Item)`
  max-height: 75px;
`;

export const DateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FormItemWrapper = styled(Form.Item)`
  flex: 1;
`;

export const FormBtn = styled(Button)`
  height: 45px;
`;

export const SubmitBtn = styled(Button)`
  display: block;
  width: 100%;
  height: 45px;
  background-color: #85dfff;
  font-weight: bold;
`;
