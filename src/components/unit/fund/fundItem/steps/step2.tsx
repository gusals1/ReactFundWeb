// 이걸 사용하면 emotion의 스타일을 더 쉽게 가져올 수 있음
// 스타일을 바인딩할때 className이 아닌 css에 바인딩하면 스타일을 적용할 수 있음.
/** @jsxImportSource @emotion/react */
import { Form, Upload, Button, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
const { Text } = Typography;

const textStyle = css`
  display: block;
  margin: 10px 0;
`;

export default function Step2() {
  const uploadProps = {
    beforeUpload: (file: any) => {
      return false;
    },
    multiple: true,
  };

  return (
    <>
      <Form.Item label="상세 이미지" name="detailimg">
        <Text type="secondary" css={textStyle}>
          1200 * 720 사이즈의 이미지를 업로드하세요.
        </Text>
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>이미지 업로드하기</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
