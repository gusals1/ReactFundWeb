import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  position: relative;
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 30%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #ccc;
  padding: 4px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Search = styled.input`
  flex-grow: 1;
  text-indent: 20px;
  outline: none;
  border: none;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
  background-color: #ccc;
`;
export const SearchBtn = styled.button`
  border: none;
  padding: 8px 10px;
  text-indent: -99999px;
  cursor: pointer;
  background: url("/headerImage/search.png") no-repeat center center;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  width: 26%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled(Link)`
  color: #4c4c4d;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 5px 18px;
  border-radius: 5px;

  :hover {
    background: #85dfff;
    border: 1px solid #85dfff;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  &:last-child {
    background: #85dfff;
    padding: 6px 8px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    :hover {
      background: #fff;
      color: #85dfff;
      transition: all 0.5s ease;
    }
  }
`;
