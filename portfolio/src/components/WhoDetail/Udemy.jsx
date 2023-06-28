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

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

const Udemy = () => {
  return (
    <List>
      <ListItem>React 완벽 가이드 with Redux, Next.js, TypeScript</ListItem>
      <ListItem>Next.js & React - 완벽 정복 가이드</ListItem>
      <ListItem>React Query : React로 서버 상태 관리하기</ListItem>
      <ListItem>The Web Developer 부트캠프 2023</ListItem>
      <ListItem>JavaScript Web Projects: 20 Projects</ListItem>
    </List>
  );
};

export default Udemy;
