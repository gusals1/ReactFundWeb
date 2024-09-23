import styled from "@emotion/styled";

export default function MoreButton() {
  const MoreBtn = styled.button`
    display: block;
    width: 240px;
    color: #4c4c4d;
    background: #fff;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 30px auto;
    padding: 8px 0;
    cursor: pointer;

    :hover {
      background: #85dfff;
      color: #fff;
      transition: all 0.2s ease-in-out;
      border: 1px solid #85dfff;
    }
  `;

  return (
    <>
      <MoreBtn>프로젝트 더보기</MoreBtn>
    </>
  );
}
