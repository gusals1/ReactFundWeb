import { Form, Modal, Radio } from "antd";
import Link from "next/link";
import * as S from "./Joinus.style";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/src/commons/libraries/firebase";
import { JoinusData } from "./Joinus.types";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function JoinForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 회원가입 함수
  // value가 unknown 타입인 이유는 form의 onFinish 형식이 unknown을 지원해서
  const onSignupFunc = async (value: unknown): Promise<void> => {
    const userData = value as JoinusData;

    try {
      setLoading(true);
      // 파이어베이스 인증 메서드
      // id pw를 이용해서 회원가입을 시도함
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.id,
        userData.password
      );
      // 회원가입이 완료되면 user정보 가져옴
      const user = userCredential.user;

      // setDoc => 파이어베이스에 새로운 데이터를 추가하는 함수 // db => 데이터베이스 객체
      // users 파이어베이스 컬렉션 이름 // uid 생성한 고유 id값
      await setDoc(doc(db, "users", user.uid), {
        name: userData.name,
        birth: `${userData.year}-${userData.month}-${userData.day}`,
        gender: userData.gender,
        email: user.email,
        uid: user.uid,
      });
      Modal.success({ content: "회원가입에 성공하셨습니다" });
      void router.push("/homepage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Wrapper>
      <S.Logo>
        <Link href={"/connectorMain"}>
          <S.StyledImage src={"/logo.svg"} alt="asd" fill />
        </Link>
      </S.Logo>
      {/* form 시작 */}
      <S.SignUpForm
        form={form}
        name="join"
        layout="vertical"
        onFinish={onSignupFunc}
      >
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
            <S.DateInfo name="year">
              <S.InputId placeholder="년" />
            </S.DateInfo>

            <S.DateInfo name="month">
              <S.InputId placeholder="월" />
            </S.DateInfo>

            <S.DateInfo name="day">
              <S.InputId placeholder="일" />
            </S.DateInfo>
          </S.DateWrap>
        </S.StyledFormItem>
        {/* gender */}
        <S.StyledFormItem label="성별" name="gender">
          <Radio.Group>
            <Radio value="male">남자</Radio>
            <Radio value="female">여자</Radio>
          </Radio.Group>
        </S.StyledFormItem>

        {/* submit btn */}
        <S.SubmitBtn type="primary" htmlType="submit" loading={loading}>
          가입하기
        </S.SubmitBtn>
      </S.SignUpForm>
    </S.Wrapper>
  );
}
