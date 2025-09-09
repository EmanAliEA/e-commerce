import React from 'react';
import Title from '../ui/Title';
import styled from 'styled-components';

interface Props {}
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 3rem 1rem;
  text-align: center;
  & > p {
    padding: 0 5rem;
    font-size: 1.6rem;
    text-align: center;
    color: #555;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  & > h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }
`;

const About: React.FC<Props> = (props) => {
  return (
    <AboutContainer>
      <Title title="about" heading={true} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris.
      </p>
      <Categories>
        <h1>our products</h1>
      </Categories>
    </AboutContainer>
  );
};

export default About;
