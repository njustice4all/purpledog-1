import React from 'react';
import styled from 'styled-components';

export default function Dot() {
  return <Container />;
}

const Container = styled.span`
  display: inline-block;
  width: 2px;
  height: 2px;
  background-color: #cbcbcb;
  margin: 0 2px;
  vertical-align: super;
  border-radius: 2px;
`;
