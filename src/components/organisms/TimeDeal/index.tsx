import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Title from 'components/atoms/Title';
import { RootState } from 'modules/rootState';
import Description from 'components/atoms/Description';
import { actionGetBanner } from 'modules/banner/banner.actions';
import WideBanner from 'components/molecules/Banner/WideBanner';
import { actionGetWine } from 'modules/wine/wine.actions';
import CountryLabel from 'components/atoms/CountryLabel';
import { numberWithComma } from 'utils';

export default function TimeDeal() {
  const dispatch = useDispatch();
  const [MAIN_SUB_1, text, selectTimeSaleWine] = useSelector(
    (state: RootState) =>
      [state.banner.MAIN_SUB_1, state.text, state.wine.selectTimeSaleWine] as const
  );

  useEffect(() => {
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_SUB_1' }));
    dispatch(actionGetWine.request({ name: 'selectTimeSaleWine' }));
  }, [dispatch]);

  const title = text['RECOMMEND_PRODUCT_1_TITLE'];
  const banner = MAIN_SUB_1[0];

  return (
    <Container>
      <Title>{title ? title.content : '...'}</Title>
      <Description>와인을 정기 구독중인 회원님에게만 드려요.</Description>
      <WideBanner
        url={banner?.thumbnailImageUrl}
        label={['타임특가로 퍼플독', '추천와인을 즐겨보세요!']}
      />
      {selectTimeSaleWine.map((wine, idx) => (
        <Wrap key={idx}>
          <Left>
            <Image src={wine.thumbnailImageUrl} alt={wine.pointDescription} />
          </Left>
          <Right>
            <CountryLabel countryName={wine.countryName} type="레드와인" />
            <Name>{wine.name}</Name>
            <Price>{numberWithComma(wine.discountPrice)}원</Price>
            <Discount>
              <Rate>{wine.timeSaleDiscountPercent}%</Rate>
              <Original>{numberWithComma(wine.salesPrice)}원</Original>
            </Discount>
            <TimeAgo>10:37:02 남음</TimeAgo>
          </Right>
        </Wrap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Left = styled.div`
  padding: 8px 0;
  background: #f7f7f7;
  border-radius: 6px;
`;

const Right = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 110px;
`;

const Name = styled.div`
  font-size: 13px;
  height: 31px;
  letter-spacing: -0.13px;
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

const TimeAgo = styled.div`
  width: 90px;
  background-color: #ff0045;
  color: #fff;
  border-radius: 2px;
  padding: 5px 4px;
  font-size: 10px;
`;
