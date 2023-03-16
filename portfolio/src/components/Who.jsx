import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import styled from 'styled-components';
import ModelAni from './Model-ani';
import Udemy from './WhoDetail/Udemy';
import Inflearn from './WhoDetail/Inflearn';
import ZeroBase from './WhoDetail/ZeroBase';

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
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;

const Title = styled.h1`
  font-size: 54px;
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
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

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

  &:hover {
    color: pink;
  }
`;

const DeatailRight = styled.div`
  flex: 3;
`;

const data = ['udemy', 'inflearn', 'zero-base'];

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
          </WhatWeDo>
          <div style={{ display: 'flex' }}>
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
              ) : (
                <ZeroBase />
              )}
            </DeatailRight>
          </div>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
