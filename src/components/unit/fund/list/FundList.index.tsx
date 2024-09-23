import MoreButton from "@/src/components/commons/moreButton/moreButton";
import { listData } from "../../../../commons/store/data";
import * as S from "./FundList.Style";
import ProdSmall from "@/src/components/commons/prodSmall/ProdSmall.index";
import Title from "@/src/components/commons/title/title.index";
import ProdMiddle from "@/src/components/commons/prodMiddle/ProdMiddle.index";
import { magazineData } from "@/src/commons/store/magazineData";
import ProdLarge from "@/src/components/commons/prodLarge/ProdLarge.index";
export default function FundList() {
  const data = listData;
  const magData = magazineData;

  const popData = data.slice(0, 4);
  const lastData = data.slice(4, 8);
  const openData = data.slice(8, 11);

  return (
    <S.Wrapper>
      <S.WrapItem>
        <Title
          title="인기펀딩"
          subTitle="지금 커넥터에서 가장 많이 찾는 프로젝트"
        />
        <S.ProdWrap>
          {popData.map((el) => (
            <ProdSmall key={el.id} el={el} />
          ))}
        </S.ProdWrap>
      </S.WrapItem>
      {/* --------------------------------------------------- */}
      <S.WrapItem>
        <Title title="마감임박" subTitle="곧 종료되는 프로젝트" />
        <S.ProdWrap>
          {lastData.map((el) => (
            <ProdSmall key={el.id} el={el} />
          ))}
        </S.ProdWrap>
        <MoreButton />
      </S.WrapItem>

      <S.SubBanner>
        <S.StyledImage src="/mainImage/main_middle.jpg" alt="배너" fill />
      </S.SubBanner>

      <S.WrapItem>
        <Title
          title="소통공간"
          subTitle="오직 기업과 주주만을 위한 플레이스!"
        />
        <S.ImageWrap>
          <S.StyledImage src="/mainImage/main_sotong.jpg" alt="배너" fill />
        </S.ImageWrap>
      </S.WrapItem>

      <S.WrapItem>
        <Title
          title="오픈예정"
          subTitle="아직 공개전인 프로젝트를 미리 만나보세요"
        />
        <S.ProdWrap>
          {openData.map((el) => (
            <ProdMiddle key={el.id} el={el} />
          ))}
        </S.ProdWrap>
      </S.WrapItem>

      <S.WrapItem>
        <Title
          title="스토어"
          subTitle="관심있는 기업에는 어떤 상품이 있는지 확인해 보세요!"
        />

        <S.ImageWrap>
          <S.StyledImage src="/mainImage/storeBanner.jpg" alt="배너" fill />
        </S.ImageWrap>
      </S.WrapItem>

      <S.WrapItem>
        <Title
          title="오픈예정"
          subTitle="아직 공개전인 프로젝트를 미리 만나보세요"
        />
        <S.ProdWrap>
          {magData.map((el) => (
            <ProdLarge key={el.id} el={el} />
          ))}
        </S.ProdWrap>
      </S.WrapItem>

      {/* --------------------------------------------------- */}
    </S.Wrapper>
  );
}
