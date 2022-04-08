import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';

import { RootState } from 'modules/rootState';
import { actionGetWine } from 'modules/wine/wine.actions';
import Title from 'components/atoms/Title';
import Description from 'components/atoms/Description';
import CountryLabel from 'components/atoms/CountryLabel';

export default function RecommendWine() {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.text);
  const { subscriptionWineRecommend } = useSelector((state: RootState) => state.wine);

  useEffect(() => {
    dispatch(actionGetWine.request({ name: 'subscriptionWineRecommend' }));
  }, [dispatch]);

  const title = text['PERSONAL_RECOMMEND_TITLE'];
  const description = text['PERSONAL_RECOMMEND_DESCRIPTON'];

  return (
    <>
      <Title>{title ? title.content : '...'}</Title>
      <Description>{description ? description.content : '...'}</Description>
      <Wrapper>
        {subscriptionWineRecommend.length === 0 && <Empty />}
        <Flicking
          bound
          align={{ camera: '3.5%', panel: '10px' }}
          className="RecommendWine-viewport"
        >
          {subscriptionWineRecommend.map(
            ({ salesPrice, productOnSales, englishName, countryName, thumbnailImageUrl }, idx) => (
              <Card key={idx}>
                <Box>
                  <Image src={thumbnailImageUrl} />
                </Box>
                <Top>
                  <CountryLabel countryName={countryName} type="제로와인" />
                </Top>
                <Name>{englishName}</Name>
                <Price>39,000원</Price>
                {productOnSales && (
                  <Discount>
                    <Rate>12%</Rate>
                    <Original>45,500원</Original>
                  </Discount>
                )}
              </Card>
            )
          )}
        </Flicking>
      </Wrapper>
    </>
  );
}

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

const Empty = styled.div`
  width: 100%;
  height: 265px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
`;
