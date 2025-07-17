import styled from 'styled-components';

export const HR = styled.hr<{ $color?: string }>`
  width: 100%;
  margin: 1rem;
  color: ${(props) => (props.$color ? props.$color : 'gray')};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.7rem;
  & a,
  & button {
    background-color: black;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.5s;
  }
  & a:hover,
  & button:hover {
    background-color: #9c999992;
    color: black;
  }
`;
