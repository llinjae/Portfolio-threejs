import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Map from './Map';

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 1400px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 70%;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e0cz5dx',
        'template_ig0giis',
        ref.current,
        'm-7I5S85DTk6h0BnN'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id='contact'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='이름' name='name' />
            <Input placeholder='이메일' name='email' />
            <TextArea
              placeholder='내용을 입력하세요.'
              name='message'
              rows={10}
            />
            <Button type='submit'>보내기</Button>
            {success &&
              '메세지가 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.'}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
