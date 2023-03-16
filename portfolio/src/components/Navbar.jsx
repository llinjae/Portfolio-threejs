import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  padding: 20px 0px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #454789;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
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
