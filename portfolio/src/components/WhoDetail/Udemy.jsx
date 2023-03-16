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

const Udemy = () => {
  return (
    <List>
      <ListItem>The Web Developer 부트캠프 2023</ListItem>
      <ListItem>React 완벽 가이드 with Redux, Next.js, TypeScript</ListItem>
    </List>
  );
};

export default Udemy;
