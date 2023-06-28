import React from 'react';
import styled from 'styled-components';
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
    padding-top: 0%;
  }
`;

const TitleBox = styled.section`
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
  { id: 0, title: '메인 화면', src: 'youtube1.JPG' },
  { id: 1, title: '상세페이지', src: 'youtube2.JPG' },
];

const YoutubeClone = () => {
  return (
    <Container>
      <TitleBox>
        <Head>YouTube 클론</Head>
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
            <h3 className='contentTitle'>{item.title}</h3>
            <img className='contentImg' src={item.src} alt='item' />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default YoutubeClone;
