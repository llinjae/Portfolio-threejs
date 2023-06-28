import styled from 'styled-components';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
