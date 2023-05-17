import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

import home from '../asset/home.JPG';
import edit from '../asset/edit.JPG';
import newDiary from '../asset/newDiary.JPG';
import description from '../asset/description.JPG';

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
  { id: 0, title: 'Home 페이지', src: home },
  { id: 1, title: 'Edit 페이지', src: edit },
  { id: 2, title: 'New 페이지', src: newDiary },
  { id: 3, title: '상세 페이지', src: description },
];

const EmotionDiary = () => {
  return (
    <Container>
      <TitleBox>
        <h2>공연 예약 페이지 구현</h2>
        <i>
          <Link href='https://llinjae-emotion-diary.web.app/'>
            <AiOutlineLink />
          </Link>
        </i>
        <i>
          <Link href='https://github.com/llinjae/youtube-clone'>
            <AiOutlineGithub />
          </Link>
        </i>
      </TitleBox>
      <Content>
        {data.map((item) => (
          <div key={item.id}>
            <h3 style={{ margin: '50px 0', textAlign: 'center' }}>
              {item.title}
            </h3>
            <img src={item.src} alt='item' width={600} height={400} />
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default EmotionDiary;
