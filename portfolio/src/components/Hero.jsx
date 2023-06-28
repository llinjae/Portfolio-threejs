import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 90%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  gap: 5%;

`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 50px;
    padding-bottom: 10%;
  }

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;

  @media (max-width: 1024px) {
    height: 3px;
  }

  @media (max-width: 500px) {
    height: 2px;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;

  @media (max-width: 1400px) {
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Desc = styled.p`
  word-wrap: wrap;
  font-size: 24px;
  color: lightgray;

  @media (max-width: 1400px) {
    font-size: 21px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Bold = styled.b`
  font-size: 30px;

  @media (max-width: 1400px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 19px;
  }
`;

const Right = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 3;
  position: relative;

  @media (max-width: 1400px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media (max-width: 1400px) {
    width: 80%;
    bottom: 20%;
  }
  
  @media (max-width: 1024px) {
    bottom: 15%;
  }
`;

const Hero = () => {
  return (
    <Section id='home'>
      <Navbar />
      <Container>
        <Left>
          <Title>
            생각하고, <br /> 구현하고, <br /> 해결하는 <br /> 개발자
          </Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>소개</Subtitle>
            <Line src='./img/line.png' />
          </WhatWeDo>
          <Desc>
            웹 프론트엔드 신입 개발자 <Bold>이인재</Bold>{' '}
            입니다.
            <br />
            항상 어떻게 구현할지 고민하며 문제를 해결합니다.
          </Desc>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>기술 스택</Subtitle>
            <Line src='./img/line.png' />
          </WhatWeDo>
          <Desc>
            HTML/CSS, JavaScript, TypeScript, React, Recoil, NextJS, Emotion JS,
            styled-components
          </Desc>
        </Left>
        <Right>
          <Canvas style={{ height: '90%' }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.8}>
              <MeshDistortMaterial
                color='#3d1c56'
                attach='material'
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src='./img/moon.png' />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
