import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from 'components/molecules/Header';
import Layout from 'components/organisms/Layout';
import MainBanner from 'components/molecules/Banner/MainBanner';
import RecommendWine from 'components/organisms/RecommendWine';
import { actionGetText } from 'modules/text/text.actions';

export default function HomeTemplate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetText.request());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <MainBanner />
      <Content>
        <RecommendWine />
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
`;
