import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actionGetText } from 'modules/text/text.actions';
import Header from 'components/molecules/Header';
import Layout from 'components/organisms/Layout';
import MainBanner from 'components/molecules/Banner/MainBanner';
import RecommendWine from 'components/organisms/RecommendWine';
import TimeDeal from 'components/organisms/TimeDeal';
import { actionGetBanner } from 'modules/banner/banner.actions';
import WideBanner from 'components/molecules/Banner/WideBanner';
import { RootState } from 'modules/rootState';
import WineByCountry from 'components/organisms/WineByCountry';
import WineByCollect from 'components/organisms/WineByCollect';
import WineByPopular from 'components/organisms/WineByPopular';

export default function HomeTemplate() {
  const dispatch = useDispatch();
  const { MAIN_SUB_2 } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(actionGetText.request());
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_SUB_2' }));
  }, [dispatch]);

  const banner = MAIN_SUB_2[0];

  return (
    <Layout>
      <Header />
      <MainBanner />
      <Content>
        <RecommendWine />
        <TimeDeal />
        <SubBannerWrapper>
          <WideBanner url={banner?.thumbnailImageUrl} label={['퍼플독과 함께한', '인증샷 투어']} />
        </SubBannerWrapper>
        <WineByCountry />
        <WineByCollect />
        <WineByPopular />
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  position: relative;
  background: #fff;
  z-index: 3;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 30px 15px;
  transform: translateY(-15px);
  padding-bottom: 100px;
`;

const SubBannerWrapper = styled.div`
  margin: 35px 0;
`;
