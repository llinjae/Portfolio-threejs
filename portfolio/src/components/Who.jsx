import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import styled from 'styled-components';
import ModelAni from './Model-ani';
import Udemy from './WhoDetail/Udemy';
import Inflearn from './WhoDetail/Inflearn';
import ZeroBase from './WhoDetail/ZeroBase';
import Youtube from './WhoDetail/Youtube';
import Book from './WhoDetail/Book';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 1400px) {
    bottom: 10%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 54px;

  @media (max-width: 1024px) {
    font-size: 45px;
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

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Line = styled.img`
  height: 5px;

  @media (max-width: 1024px) {
    height: 3px;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const EducationBox= styled.div`
  display: flex;

  @media (max-width: 1024px) {
    gap: 5%;
  }

  @media (max-width: 768px) {
    padding-top: 5%;
    padding-left: 20%;
  }

  @media (max-width: 500px) {
    padding-top: 5%;
    padding-left: 5%;
  }
`

const DetailLeft = styled.div`
  flex: 1;
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 20px;
  color: white;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  color: gray;

  &:hover {
    color: pink;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const DeatailRight = styled.div`
  flex: 3;
`;

const data = ['udemy', 'inflearn', 'zero-base', 'youtube', 'book'];

const Who = () => {
  const [education, setEducation] = useState('udemy');
  return (
    <Section id='who'>
      <Container>
        <Left>
          <Canvas camera={{ position: [2, 0, 12.25], fov: 15, scale: '2' }}>
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.9} />
            <ModelAni position={[0.025, -0.9, 0]} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Left>
        <Right>
          <Title>
            다양하고 <br /> 깊게 배우려고 <br /> 노력하는 개발자
          </Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>교육 사항</Subtitle>
            <Line src='./img/line.png' />
          </WhatWeDo>
          <EducationBox>
            <DetailLeft>
              <List>
                {data.map((item) => (
                  <ListItem
                    key={item}
                    text={item}
                    onClick={() => setEducation(item)}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </DetailLeft>
            <DeatailRight>
              {education === 'udemy' ? (
                <Udemy />
              ) : education === 'inflearn' ? (
                <Inflearn />
              ) : education === 'zero-base' ? (
                <ZeroBase />
              ) : education === 'youtube' ? (
                <Youtube />
              ) : (
                <Book />
              )}
            </DeatailRight>
          </EducationBox>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
