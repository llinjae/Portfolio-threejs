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

const ZeroBase = () => {
  return (
    <List>
      <ListItem>Git/GitHub 이론 & 실전 적용</ListItem>
      <ListItem>이론부터 실전까지 모든 것을 담은 자료구조/알고리즘</ListItem>
      <ListItem>처음부터 따라해보는 HTML/CSS 실습</ListItem>
      <ListItem>Basic 자바스크립트</ListItem>
      <ListItem>초심자도 빈틈없이 학습하는 자바스크립트</ListItem>
      <ListItem>토이프로젝트 20개, 기능 구현 100개 완벽 실습 자바스크립트</ListItem>
      <ListItem>Logical 타입스크립트</ListItem>
      <ListItem>이해가 빠른 일취월장 리액트</ListItem>
    </List>
  );
};

export default ZeroBase;
