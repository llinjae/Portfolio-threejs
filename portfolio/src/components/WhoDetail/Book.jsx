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

const Book = () => {
  return (
    <List>
      <ListItem>Do it! HTML+CSS+자바스크립트 웹 표준의 정석</ListItem>
      <ListItem>자바스크립트 코드 레시피278</ListItem>
      <ListItem>자바스크립트 딥다이브</ListItem>
      <ListItem>이펙티브 타입스크립트</ListItem>
    </List>
  );
};

export default Book;
