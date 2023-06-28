import React from 'react';
import styled from 'styled-components';
import main from '../asset/메인.gif'
import filter from '../asset/필터.gif';
import description from '../asset/상세페이지.gif';
import edit from '../asset/수정페이지.gif';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 1400px) {
    padding-top: 30%;
  }

  @media (max-width: 768px) {
    padding-top: 5%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Head = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  color: #626a6a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 60vh;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const data = [
  { id: 0, title: '메인 화면', src: main },
  { id: 1, title: '필터', src: filter },
  { id: 2, title: '상세페이지', src: description },
  { id: 3, title: '수정페이지', src: edit },
];

const Bookmark = () => {
  return (
    <Container>
      <TitleBox>
        <Head>감성일기장 구현</Head>
        <i>
          <Link href='https://llinjae-emotion-diary.web.app/'>
            <AiOutlineLink />
          </Link>
        </i>
        <i>
          <Link href='https://github.com/llinjae/EmotionDiary'>
            <AiOutlineGithub />
          </Link>
        </i>
      </TitleBox>
      <Content>
        {data.map((item) => (
          <>
            <h3 className='contentTitle'>{item.title}</h3>
            <img className='contentImg' src={item.src} alt='item' />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default Bookmark;
