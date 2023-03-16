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

const Inflearn = () => {
  return (
    <List>
      <ListItem>인터랙티브 개발 실무 끝장내기</ListItem>
      <ListItem>Three.js 3D 인터랙티브 바로 시작하기</ListItem>
      <ListItem>웹 게임을 만들며 배우는 TypeScript</ListItem>
    </List>
  );
};

export default Inflearn;
