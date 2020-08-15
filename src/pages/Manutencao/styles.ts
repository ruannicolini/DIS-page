import styled from 'styled-components';

import bowImg from '../../assets/bow.png';

export const Container = styled.div`
  height: 100vh;
  min-height: 780px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 640px;
  padding: 20px 10px;

  justify-content: center;
  align-items: center;

  h1 {
    color: #b28564;
    font-family: monospace;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const LacoImg = styled.div`
  background: url(${bowImg}) no-repeat center;
  background-size: cover;
  width: 90%;
  height: 200px;
  max-width: 1024px;
  margin: 0px;
`;

export const Footer = styled.div`
  /* flex: 1;
  background: #b28564;
  justify-content: center; */

  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-family: monospace;
    font-size: 24px;
    margin: 10px 0;
  }

  p {
    font-family: monospace;
    color: #9b3030;
    font-size: 14px;
  }
`;
