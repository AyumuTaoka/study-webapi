import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <NekoTitle>タスク管理ツール</NekoTitle>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div``;

const NekoTitle = styled.h1`
  text-align: center;
  font-size: 5em;
  color: red;
`;
