import * as S from "./ProdMiddle.style";

interface IProdSmallProps {
  el: {
    id: number;
    name: string;
    content: string;
    price: number;
    image: string;
  };
}

export default function ProdMiddle({ el, ...props }: IProdSmallProps) {
  return (
    <S.Wrap>
      <S.ProdImage>
        <S.StyledImage
          src={el.image}
          alt={`${el.id}번 이미지`}
          fill
          sizes="(max-width:1200px) 100%"
        />
      </S.ProdImage>

      <S.ProdName>{el.name}</S.ProdName>
      <S.ProdText>{el.content}</S.ProdText>

      <S.OpenDay>4/13(목) 14:00 오픈예정</S.OpenDay>

      <S.BoldLine></S.BoldLine>
    </S.Wrap>
  );
}
