import React from 'react';

import Header from 'components/molecules/Header';
import Layout from 'components/organisms/Layout';
import MainBanner from 'components/molecules/Banner/MainBanner';

export default function HomeTemplate() {
  return (
    <Layout>
      <Header />
      <MainBanner />
    </Layout>
  );
}
