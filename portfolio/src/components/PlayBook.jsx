import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';
import main from '../asset/main.gif';
import performance from '../asset/performance.gif';
import description from '../asset/description.gif';
import bookmark from '../asset/bookmark.gif';
import reservation from '../asset/reservation.gif';
import signin from '../asset/signin.gif';
import register from '../asset/register.gif';
import chat from '../asset/chat.gif';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 500px;
`;

const data = [
  { id: 0, title: '메인 화면', src: main },
  { id: 1, title: '공연 소개', src: performance },
  { id: 2, title: '상세페이지', src: description },
  { id: 3, title: '북마크', src: bookmark },
  { id: 4, title: '공연 예약', src: reservation },
  { id: 5, title: '로그인', src: signin },
  { id: 6, title: '회원 가입', src: register },
  { id: 7, title: '고객센터', src: chat },
];

const PlayBook = () => {
  return (
    <Container>
      <TitleBox>
        <h2>공연 예약 페이지 구현</h2>
        <i>
          <Link href='https://github.com/JKKook/team_project_playbook'>
            <AiOutlineGithub />
          </Link>
        </i>
      </TitleBox>
      <Content>
        {data.map((item) => (
          <>
            <h3 style={{ margin: '50px 0' }}>{item.title}</h3>
            <img src={item.src} alt='item' width={600} height={400} />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default PlayBook;
