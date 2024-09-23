import * as S from "./ProdLarge.style";

interface IProdSmallProps {
  el: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
}

export default function ProdLarge({ el, ...props }: IProdSmallProps) {
  return (
    <S.Wrap>
      <S.ProdImage>
        <S.StyledImage src={el.image} alt={"asdas"} fill />
      </S.ProdImage>
      <S.ProdName>{el.title}</S.ProdName>
      <S.ProdText>{el.content}</S.ProdText>
    </S.Wrap>
  );
}
