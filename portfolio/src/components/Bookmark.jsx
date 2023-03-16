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

const Bookmark = () => {
  return (
    <Container>
      <TitleBox>
        <h2>북마크 구현</h2>
        <i>
          <Link href='https://bookmark-one-psi.vercel.app/'>
            <AiOutlineLink />
          </Link>
        </i>
        <i>
          <Link href='https://github.com/llinjae/Bookmark'>
            <AiOutlineGithub />
          </Link>
        </i>
      </TitleBox>
      <img src='북마크.webp' alt='' style={{ width: '700px' }} />
    </Container>
  );
};

export default Bookmark;
