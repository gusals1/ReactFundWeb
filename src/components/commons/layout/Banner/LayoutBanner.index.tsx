import styled from "@emotion/styled";
import Image from "next/image";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    max-width: 1200px;
    height: auto;
    margin: auto;
  `;
  return (
    <Wrapper>
      <Image
        src="/banner/Banner1.jpg"
        alt="배너이미지"
        width={1200}
        height={440}
        priority
      />
    </Wrapper>
  );
}
