import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';

import { RootState } from 'modules/rootState';
import { actionGetRecommendWine } from 'modules/recommendWine/recommendWine.actions';
import Dot from 'components/atoms/Dot';

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
        <Flicking
          bound
          align={{ camera: '3.5%', panel: '10px' }}
          className="RecommendWine-viewport"
        >
          {results.map(({ salesPrice, englishName, countryName, thumbnailImageUrl }, idx) => (
            <Card key={idx}>
              <Box>
                <Image src={thumbnailImageUrl} />
              </Box>
              <Top>
                {countryName} <Dot /> 제로와인
              </Top>
              <Name>{englishName}</Name>
              <Price>39,500원</Price>
              <Discount>
                <Rate>12%</Rate>
                <Original>45,500원</Original>
              </Discount>
            </Card>
          ))}
        </Flicking>
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
  margin: 0 -15px;
  margin-top: 15px;
`;

const Box = styled.div`
  width: 140px;
  padding: 11px 0;
  background-color: #f7f7f7;
  border-radius: 6px;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 100%;
  -webkit-user-drag: none;
`;

const Card = styled.div``;

const Top = styled.div`
  margin-top: 8px;
  font-size: 11px;
  color: #cbcbcb;
`;

const Name = styled.div`
  margin-top: 2px;
  font-size: 13px;
  width: 130px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  margin-top: 7px;
  font-weight: bold;
  font-size: 16px;
`;

const Discount = styled.div`
  margin-top: 2px;
  font-size: 12px;
  display: flex;
`;

const Rate = styled.div`
  color: #ff0045;
`;

const Original = styled.div`
  color: #cbcbcb;
  text-decoration: line-through;
  margin-left: 5px;
`;
