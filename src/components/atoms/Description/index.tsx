import React from 'react';
import styled from 'styled-components';

interface IDescription {
  children?: React.ReactNode;
}

export default function Description({ children }: IDescription) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  font-size: 13px;
  letter-spacing: -0.13px;
  color: #333;
  margin-top: 5px;
`;
