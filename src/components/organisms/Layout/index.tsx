import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Nav from 'components/molecules/Nav';

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
    position: relative;
  }

  .RecommendWine-viewport {
    padding: 0 15px;
  }
`;

export default function Layout({ children }: ILayout) {
  return (
    <>
      <GlobalStyle />
      {children}
      <Nav />
    </>
  );
}
