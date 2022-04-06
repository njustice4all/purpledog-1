import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'modules/rootState';
import Description from 'components/atoms/Description';
import ImageSpecial from 'assets/special.png';

export default function WineByCollect() {
  const text = useSelector((state: RootState) => state.text);

  const title = text['EVENT_TITLE'];
  const description = text['EVENT_DESCRIPTION'];

  return (
    <>
      <Row>
        {title ? title.content : '...'}
        <span>더보기</span>
      </Row>
      <Description>{description ? description.content : '...'}</Description>
      <Wrap>
        <Image src={ImageSpecial} alt="와인으로 떠나는 세계여행" />
        <Content>
          <Title>와인으로 떠나는 세계여행,</Title>
          <Title>와인 기획전 OPEN!</Title>
          <Date>22.02.15 - 22.03.15</Date>
        </Content>
      </Wrap>
    </>
  );
}

const Row = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #a2a2a2;
    font-size: 13px;
  }
`;

const Wrap = styled.div`
  position: relative;
  margin-top: 15px;
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  left: 15px;
  bottom: 30px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  line-height: 26px;
  color: #fff;
`;

const Date = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
`;
