import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 65px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
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
`;

const Hero = () => {
  return (
    <Section id='home'>
      <Navbar />
      <Container>
        <Left>
          <Title>
            생각하고, <br /> 구현하고, <br /> 해결하는 개발자
          </Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>소개</Subtitle>
          </WhatWeDo>
          <Desc>
            웹 프론트엔드 신입 개발자 <b style={{ fontSize: '30px' }}>이인재</b>{' '}
            입니다.
            <br />
            항상 어떻게 구현할지 고민하며 문제를 해결합니다.
          </Desc>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>기술 스택</Subtitle>
          </WhatWeDo>
          <Desc>
            HTML/CSS, JavaScript, TypeScript, React, Recoil <br /> NextJS,
            Emotion JS, styled-components
          </Desc>
        </Left>
        <Right>
          <Canvas>
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
