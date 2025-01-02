import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  list-style: none;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>OZ코딩스쿨</h1>
      <MenuList>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
        <MenuItem>내클래스</MenuItem>
      </MenuList>
    </HeaderWrapper>
  );
}
