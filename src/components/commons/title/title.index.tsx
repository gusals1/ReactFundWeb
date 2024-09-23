import * as S from "./title.style";

interface ITitleProps {
  title: string;
  subTitle: string;
}

export default function Title(props: ITitleProps) {
  return (
    <S.WrapTitle>
      <S.Title>{props.title}</S.Title>
      <S.SubTitle>{props.subTitle}</S.SubTitle>
    </S.WrapTitle>
  );
}
