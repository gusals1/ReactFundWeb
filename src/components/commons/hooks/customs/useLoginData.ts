import { auth } from "@/src/commons/libraries/firebase";
import { loginToken } from "@/src/commons/store/globalState";
import { Modal } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

interface LoginData {
  id: string;
  password: string;
}

export const useLoginData = () => {
  const [, setAccessToken] = useRecoilState(loginToken);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClickLogin = async (value: unknown): Promise<void> => {
    const data = value as LoginData;

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.id,
        data.password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      setAccessToken(token);
      sessionStorage.setItem("userToken", token);
      Modal.success({ content: `${user.email}님 안녕하세요!` });
      router.push("/homepage");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickLogout = () => {
    setAccessToken("");
    sessionStorage.removeItem("userToken");
    Modal.success({ content: "로그아웃 되셨습니다." });
  };

  return { loading, onClickLogin, onClickLogout };
};
