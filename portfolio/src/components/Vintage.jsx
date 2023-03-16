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

const Vintage = () => {
  return (
    <Container>
      <TitleBox>
        <h2>가구 쇼핑몰 구현</h2>
        <i>
          <Link href='https://vintage-rho.vercel.app/'>
            <AiOutlineLink />
          </Link>
        </i>
        <i>
          <Link href='https://github.com/llinjae/Vintage'>
            <AiOutlineGithub />
          </Link>
        </i>
      </TitleBox>
      <img src='가구.webp' alt='' style={{ width: '700px' }} />
    </Container>
  );
};

export default Vintage;
