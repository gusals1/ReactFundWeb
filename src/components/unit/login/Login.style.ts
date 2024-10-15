import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export const Card = styled.div`
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
`;

export const Logo = styled.div`
  width: 190px;
  aspect-ratio: 200/85;
  position: relative;
  margin-bottom: 40px;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;
export const StyledForm = styled(Form)`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const StyledInput = styled(Input)`
  width: 100%;
  height: 45px;
`;

export const StyledPassword = styled(Input.Password)`
  width: 100%;
  height: 45px;
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
  height: 45px;
  background-color: #85dfff;
  font-weight: bold;
`;

export const LinkContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;

export const StyledLink = styled(Link)`
  flex-grow: 1;
  padding: 0 5px;
  text-align: center;
  color: #666666;
  font-size: 13px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    background: #ccc;
    width: 1px;
    height: 100%;
  }
  &:last-of-type::after {
    display: none;
  }
  :hover {
    opacity: 0.7;
  }
`;
