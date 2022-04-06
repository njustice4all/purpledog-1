import React from 'react';
import { createGlobalStyle } from 'styled-components';

interface ILayout {
  children?: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    width: 375px;
    height: 100vh;
    margin: 0 auto;
  }

  #root {
    height: 100%;
  }
`;

export default function Layout({ children }: ILayout) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
