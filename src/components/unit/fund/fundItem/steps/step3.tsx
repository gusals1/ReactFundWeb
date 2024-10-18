// Step3.tsx
import { Form, Input } from "antd";

export default function Step3() {
  // 회사 정보에 대해서 입력하는부분
  // 회사 이름, 정보, 위치등 입력하는 느낌.

  return (
    <>
      <Form.Item label="회사명" name="companyname">
        <Input placeholder="회사명" />
      </Form.Item>
      <Form.Item label="업종" name="Industry">
        <Input placeholder="ex) 건설업" />
      </Form.Item>
      <Form.Item label="회사 주소" name="step3">
        <Input placeholder="주소를 입력해주세요" />
      </Form.Item>
    </>
  );
}
