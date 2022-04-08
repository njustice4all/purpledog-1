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
        <Item style={{ marginRight: '15px' }}>
          <Icon src={IconBell} />
          <Dot />
        </Item>
        <Item>
          <Icon src={IconPocket} />
          <Count>14</Count>
        </Item>
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

const Item = styled.div`
  position: relative;
`;

const Icon = styled.img`
  width: 30px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: #ff005f;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(2px, 0px);
  border-radius: 6px;
`;

const Count = styled.div`
  width: 20px;
  height: 18px;
  background: #ff005f;
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  transform: translate(5px, -4px);
  border-radius: 15px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
