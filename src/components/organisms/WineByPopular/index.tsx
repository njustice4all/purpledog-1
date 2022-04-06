import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';
import Description from 'components/atoms/Description';
import Title from 'components/atoms/Title';
import { actionGetWine } from 'modules/wine/wine.actions';
import CountryLabel from 'components/atoms/CountryLabel';
import { numberWithComma } from 'utils';

export default function WineByPopular() {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.text);
  const { selectPopularWine } = useSelector((state: RootState) => state.wine);

  useEffect(() => {
    dispatch(actionGetWine.request({ name: 'selectPopularWine' }));
  }, [dispatch]);

  const title = text['RECOMMEND_PRODUCT_2_TITLTE'];
  const description = text['RECOMMEND_PRODUCT_2_DESCRIPTION'];

  return (
    <>
      <Title>{title ? title.content : '...'}</Title>
      <Description>{description ? description.content : '...'}</Description>
      <Wrap>
        {selectPopularWine.map((wine, idx) => (
          <Card key={idx}>
            <ImageWrap>
              <Image src={wine.thumbnailImageUrl} />
            </ImageWrap>
            <Top>
              <CountryLabel countryName={wine.countryName} type="제로와인" />
            </Top>
            <Name>{wine.name}</Name>
            <Price>{numberWithComma(wine.salesPrice)}원</Price>
            <Discount>
              <Rate>12%</Rate>
              <Original>{numberWithComma(wine.salesPrice)}원</Original>
            </Discount>
          </Card>
        ))}
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Card = styled.div`
  margin-bottom: 18px;
`;

const ImageWrap = styled.div`
  padding: 13px 0;
  background: #f7f7f7;
  border-radius: 6px;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Top = styled.div`
  margin-top: 10px;
`;

const Name = styled.div`
  margin-top: 2px;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 167px;
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
