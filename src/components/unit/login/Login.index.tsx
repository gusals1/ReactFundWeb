import Link from "next/link";
import * as S from "./Login.style";
import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useLoginData } from "../../commons/hooks/customs/useLoginData";

export default function LoginPage() {
  const { onClickLogin, loading } = useLoginData();

  return (
    <S.Card>
      <S.Logo>
        <Link href={"/connectorMain"}>
          <S.StyledImage src={"/logo.svg"} alt="asd" fill />
        </Link>
      </S.Logo>
      {/* form 구역 */}
      <S.StyledForm name="login" onFinish={onClickLogin}>
        <Form.Item
          name="id"
          rules={[{ required: true, message: "아이디를 입력해주세요!" }]}
        >
          <S.StyledInput placeholder="아이디" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
        >
          <S.StyledPassword placeholder="비밀번호" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <S.SubmitBtn type="primary" htmlType="submit" loading={loading}>
            로그인하기
          </S.SubmitBtn>
        </Form.Item>
      </S.StyledForm>
      {/* link area */}
      <S.LinkContainer>
        <S.StyledLink href="#">아이디 찾기</S.StyledLink>
        <S.StyledLink href="#">비밀번호 찾기</S.StyledLink>
        <S.StyledLink href="/join">회원가입</S.StyledLink>
      </S.LinkContainer>
    </S.Card>
  );
}
