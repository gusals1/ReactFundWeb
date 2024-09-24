import { Form, Select, Radio, Row, Col } from "antd";
import Link from "next/link";
import * as S from "./Joinus.style";

const { Option } = Select;

export default function JoinForm() {
  const [form] = Form.useForm();

  return (
    <S.Wrapper>
      <S.Logo>
        <Link href={"/connectorMain"}>
          <S.StyledImage src={"/logo.svg"} alt="asd" fill />
        </Link>
      </S.Logo>
      {/* form 시작 */}
      <S.SignUpForm form={form} name="join" layout="vertical">
        {/* id */}
        <S.StyledFormItem
          label="아이디"
          name="id"
          rules={[{ required: true, message: "아이디를 입력하세요!" }]}
        >
          <S.InputId />
        </S.StyledFormItem>
        {/* password */}
        <S.StyledFormItem
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}
        >
          <S.InputPassword />
        </S.StyledFormItem>
        {/* re_password */}
        <S.StyledFormItem
          label="비밀번호 확인"
          name="re_password"
          rules={[{ required: true, message: "비밀번호를 다시 입력하세요!" }]}
        >
          <S.InputPassword />
        </S.StyledFormItem>
        {/* name */}
        <S.StyledFormItem
          label="이름"
          name="name"
          rules={[{ required: true, message: "이름을 입력하세요!" }]}
        >
          <S.InputId />
        </S.StyledFormItem>
        {/* birth date */}
        <S.StyledFormItem label="생년월일">
          <S.DateWrap>
            <S.FormItemWrapper name="year">
              <S.InputId placeholder="년" />
            </S.FormItemWrapper>

            <S.FormItemWrapper name="month">
              <S.InputId placeholder="월" />
            </S.FormItemWrapper>

            <S.FormItemWrapper name="day">
              <S.InputId placeholder="일" />
            </S.FormItemWrapper>
          </S.DateWrap>
        </S.StyledFormItem>
        {/* gender */}
        <Form.Item label="성별" name="gender">
          <Radio.Group>
            <Radio value="male">남자</Radio>
            <Radio value="female">여자</Radio>
          </Radio.Group>
        </Form.Item>
        {/* phone number */}
        <S.StyledFormItem label="휴대전화">
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "휴대폰 번호를 입력해주세요" },
                ]}
              >
                <S.InputId placeholder="- 없이 입력해주세요" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <S.FormBtn>인증번호 받기</S.FormBtn>
            </Col>
          </Row>
        </S.StyledFormItem>
        {/* certify number */}
        <S.StyledFormItem>
          <Row gutter={16}>
            <Col span={16}>
              <S.InputId placeholder="인증번호를 입력하세요" />
            </Col>
            <Col span={8}>
              <S.FormBtn>인증번호 확인</S.FormBtn>
            </Col>
          </Row>
        </S.StyledFormItem>
        {/* submit btn */}
        <S.SubmitBtn type="primary" htmlType="submit">
          가입하기
        </S.SubmitBtn>
      </S.SignUpForm>
    </S.Wrapper>
  );
}
