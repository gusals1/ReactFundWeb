import Image from "next/image";
import * as S from "./ProdSmall.style";

interface IProdSmallProps {
  el: {
    id: number;
    name: string;
    content: string;
    price: number;
    image: string;
  };
}

export default function ProdSmall({ el, ...props }: IProdSmallProps) {
  return (
    <S.Wrap>
      <Image
        src={el.image}
        alt={"asdas"}
        width={230}
        height={230}
        style={{ borderRadius: "10px" }}
      />
      <S.ProdName>{el.name}</S.ProdName>
      <S.ProdText>{el.content}</S.ProdText>
      <S.PriceInfo>
        <S.Percent>2,286%</S.Percent>
        <S.Price>{el.price.toLocaleString("ko-KR")}원</S.Price>
        <S.Date>10일 남음</S.Date>
      </S.PriceInfo>
      <S.BoldLine></S.BoldLine>
    </S.Wrap>
  );
}
