import React from 'react';
import { HR } from './styles';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  heading?: boolean;
}

const TitleContainer = styled.div<{ $heading?: boolean }>`
  ${(props) =>
    props.$heading
      ? css`
          margin: auto;
          text-align: center;
          width: 100%;
          font-size: 5rem;
          text-transform: capitalize;
        `
      : css`
          & > p {
            padding: 1rem 2rem;
            font-size: 2.5rem;
            font-weight: bold;
            background-color: #96959517;
            text-transform: capitalize;
          }
          & hr {
            border: none;
            border-top: 1px solid #8080806d;
            margin: 0;
          }
        `}

  @media (max-width:320px) {
    p {
      font-size: ${(props) => (props.$heading ? '3rem' : '2rem')};
    }
  }
`;
const Title: React.FC<Props> = ({ title, heading }) => {
  return (
    <TitleContainer $heading={heading}>
      <p>{title}</p>
      <HR />
    </TitleContainer>
  );
};

export default Title;
