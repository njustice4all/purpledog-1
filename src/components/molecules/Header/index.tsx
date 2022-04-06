import React from 'react';
import styled from 'styled-components';

import IconSearch from 'assets/icon-search.svg';
import IconBell from 'assets/icon-bell.svg';
import IconPocket from 'assets/icon-pocket.svg';

export default function Header() {
  return (
    <Container>
      <Icon src={IconSearch} />
      <Right>
        <Icon src={IconBell} style={{ marginRight: '15px' }} />
        <Icon src={IconPocket} />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

const Right = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 30px;
`;
