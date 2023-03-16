import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  color: white;
`;

const Youtube = () => {
  return (
    <List>
      <ListItem>유노코딩 - CSS 레이아웃 - flex & grid</ListItem>
      <ListItem>얄팍한 코딩사전 - 제대로 파는 HTML & CSS - 웹 퍼블리싱 끝.장.내.기</ListItem>
      <ListItem>얄팍한 코딩사전 - 제대로 파는 Git & GitHub - 깃 끝.장.내.기</ListItem>
      <ListItem>생활코딩 - HTML/CSS/JavaScript</ListItem>
      <ListItem>코딩앙마 - 왕초보/중급 자바스크립트, Reactjs</ListItem>
    </List>
  );
};

export default Youtube;
