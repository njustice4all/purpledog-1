import React from 'react';
import styled from 'styled-components';

interface ITitle {
  children?: React.ReactNode;
}

export default function Title({ children }: ITitle) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.18px;
`;
