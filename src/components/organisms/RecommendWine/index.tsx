import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';
import { actionGetRecommendWine } from 'modules/recommendWine/recommendWine.actions';

export default function RecommendWine() {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.text);
  const { isFetching, results } = useSelector((state: RootState) => state.recommendWine);
  const obj = text['PERSONAL_RECOMMEND_DESCRIPTON'];

  useEffect(() => {
    dispatch(actionGetRecommendWine.request());
  }, [dispatch]);

  return (
    <>
      <Title>김새콤달콤님께 맞는 와인</Title>
      <Description>{obj ? obj.content : '...'}</Description>
      <Wrapper>
        <h1>hi</h1>
      </Wrapper>
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

const Wrapper = styled.div`
  margin-top: 15px;
`;
