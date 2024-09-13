import { listData } from "../../../../commons/store/data";
import * as S from "./FundList.Style";
import ProdSmall from "@/src/components/commons/prodSmall/ProdSmall.index";
export default function FundList() {
  const data = listData;

  const popData = data.slice(0, 4);
  const lastData = data.slice(4, 8);
  console.log(popData);

  return (
    <S.Wrapper>
      <S.WrapItem>
        <S.WrapTitle>
          <S.Title>인기펀딩</S.Title>
          <S.SubTitle>지금 커넥터에서 가장 많이 찾는 프로젝트</S.SubTitle>
        </S.WrapTitle>
        <S.ProdWrap>
          {popData.map((el) => (
            <ProdSmall key={el.id} el={el} />
          ))}
        </S.ProdWrap>
      </S.WrapItem>
      {/* --------------------------------------------------- */}
      <S.WrapItem>
        <S.WrapTitle>
          <S.Title>마감임박</S.Title>
          <S.SubTitle>지금 커넥터에서 가장 많이 찾는 프로젝트</S.SubTitle>
        </S.WrapTitle>
        <S.ProdWrap>
          {lastData.map((el) => (
            <ProdSmall key={el.id} el={el} />
          ))}
        </S.ProdWrap>
      </S.WrapItem>
      {/* 더보기 버튼 */}
      {/* --------------------------------------------------- */}
    </S.Wrapper>
  );
}
