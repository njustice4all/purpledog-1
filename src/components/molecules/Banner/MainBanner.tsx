import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import { actionGetBanner } from 'modules/banner/banner.actions';
import { RootState } from 'modules/rootState';

export default function MainBanner() {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const { MAIN_TOP } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_TOP' }));
  }, [dispatch]);

  const count = 100 / MAIN_TOP.length;

  return (
    <Banner>
      <Flicking onChanged={({ index }) => setCurrent(index)}>
        {MAIN_TOP.length === 0 && <Empty />}
        {MAIN_TOP.map(({ thumbnailImageUrl, description }, idx) => (
          <Inner key={idx}>
            <Image src={thumbnailImageUrl} alt={description} />
            <TextArea>
              <Title>{description}</Title>
              <Tag>#까베네쇼비뇽 #레드</Tag>
            </TextArea>
          </Inner>
        ))}
      </Flicking>
      <Track>
        <TrackRange percent={(current + 1) * count} />
      </Track>
    </Banner>
  );
}

const Banner = styled.div`
  position: relative;
`;

const Empty = styled.div`
  width: 375px;
  height: 380px;
  background: rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 375px;
`;

const Inner = styled.div`
  position: relative;
`;

const TextArea = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 60%;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.78px;
  color: #fff;
  font-weight: normal;
`;

const Tag = styled.div`
  font-size: 13px;
  color: #fff;
  margin: 10px 0;
`;

const Track = styled.div`
  position: absolute;
  bottom: 40px;
  z-index: 99;
  left: 20px;
  right: 20px;
  overflow: hidden;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  height: 4px;
`;

const TrackRange = styled.div<{ percent: number }>`
  position: absolute;
  height: 100%;
  width: ${({ percent }) => percent}%;
  background: #fff;
  border-radius: 2px;
`;
