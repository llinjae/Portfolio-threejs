import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: fixed;
  width: 90%;
  padding: 20px 0px;
  z-index: 10;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #454789;

  @media (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 30%;
  }

  @media (max-width: 500px) {
    gap: 20%;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Title href='#'>Portfolio</Title>
          <List>
            <ListItem>
              <a href='#home'>Home</a>
            </ListItem>
            <ListItem>
              <a href='#who'>Who</a>
            </ListItem>
            <ListItem>
              <a href='#projects'>Projects</a>
            </ListItem>
            <ListItem>
              <a href='#contact'>Contact</a>
            </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
