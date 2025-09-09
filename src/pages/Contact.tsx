import React from 'react';
import Title from '../ui/Title';
import styled from 'styled-components';

interface Props {}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 3rem 1rem;
`;
const Contact: React.FC<Props> = (props) => {
  return (
    <ContactContainer>
      <Title title="contact" heading={true} />
    </ContactContainer>
  );
};

export default Contact;
