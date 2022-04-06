import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';

export default function RecommendWine() {
  const text = useSelector((state: RootState) => state.text);
  const obj = text['PERSONAL_RECOMMEND_DESCRIPTON'];

  return (
    <>
      <Title>김새콤달콤님께 맞는 와인</Title>
      <Description>{obj ? obj.content : '...'}</Description>
    </>
  );
}

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.18px;
`;

const Description = styled.div`
  font-size: 13px;
  letter-spacing: -0.13px;
  color: #333;
  margin-top: 5px;
`;
