// Step1.tsx
import { Form, Input } from "antd";

// 여기서는 제목, 목표 금액, 진행 기간, 대표 이미지를 데이터로 받음

export default function Step1() {
  return (
    <>
      <Form.Item label="프로젝트 제목" name="title">
        <Input placeholder="프로젝트 제목을 입력해주세요" />
      </Form.Item>
      <Form.Item label="목표 금액" name="amount">
        <Input placeholder="1,000,000원" />
      </Form.Item>
      <Form.Item label="진행 기간" name="durate">
        <Input placeholder="Enter Step 1 data" />
      </Form.Item>
      <Form.Item label="대표 이미지" name="thumbnail">
        <Input placeholder="Enter Step 1 data" />
      </Form.Item>
    </>
  );
}
