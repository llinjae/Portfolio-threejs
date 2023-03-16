import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TitleBox = styled.section`
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
  { id: 0, title: '메인 화면', src: 'youtube1.JPG' },
  { id: 1, title: '상세페이지', src: 'youtube2.JPG' },
];

const YoutubeClone = () => {
  return (
    <Container>
      <TitleBox>
        <h2>YouTube 클론</h2>
        <i>
          <Link href='https://youtube-clone-llinjae.vercel.app'>
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
          <>
            <h3 style={{ margin: '50px 0' }}>{item.title}</h3>
            <img src={item.src} alt='item' width={600} height={400} />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default YoutubeClone;
