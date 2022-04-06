import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Title from 'components/atoms/Title';
import { RootState } from 'modules/rootState';
import Description from 'components/atoms/Description';
import { actionGetBanner } from 'modules/banner/banner.actions';
import WideBanner from 'components/molecules/Banner/WideBanner';

export default function TimeDeal() {
  const dispatch = useDispatch();
  const { MAIN_SUB_1 } = useSelector((state: RootState) => state.banner);
  const text = useSelector((state: RootState) => state.text);

  useEffect(() => {
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_SUB_1' }));
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
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
`;
