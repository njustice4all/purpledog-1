import React from 'react';
import styled from 'styled-components';

import { routes } from 'utils/constants';

export default function Nav() {
  return (
    <Container>
      {routes.map(({ src, label }, idx) => (
        <Box key={idx}>
          <Icon src={src} />
          <Label current={label === '홈'}>{label}</Label>
        </Box>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 99;
  max-width: 375px;
  width: 100%;
  justify-content: space-around;
  padding: 5px 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img``;

const Label = styled.div<{ current?: boolean }>`
  margin-top: 2px;
  font-size: 8px;
  color: ${({ current }) => (current ? '#7F24C5' : '#000')};
`;
