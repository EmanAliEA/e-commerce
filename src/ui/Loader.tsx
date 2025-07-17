import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import styled from 'styled-components';

const LoaderS = styled.div`
  .loader {
    animation: loaderAnimation 1s linear infinite;
    transition: all 1s;
    @keyframes loaderAnimation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderS>
      <BiLoaderAlt className="loader" />
    </LoaderS>
  );
};

export default Loader;
