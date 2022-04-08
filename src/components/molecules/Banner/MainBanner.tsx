import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import { actionGetBanner } from 'modules/banner/banner.actions';
import { RootState } from 'modules/rootState';

export default function MainBanner() {
  const dispatch = useDispatch();
  const { MAIN_TOP } = useSelector((state: RootState) => state.banner);

  useEffect(() => {
    dispatch(actionGetBanner.request({ bannerCodeId: 'MAIN_TOP' }));
  }, [dispatch]);

  return (
    <Flicking>
      {MAIN_TOP.length === 0 && <Empty />}
      {MAIN_TOP.map(({ thumbnailImageUrl, description }, idx) => (
        <Inner key={idx}>
          <Image src={thumbnailImageUrl} alt={description} />
          <TextArea>
            <Title>{description}</Title>
            <Tag>#까베네쇼비뇽 #레드</Tag>
            <Track />
          </TextArea>
        </Inner>
      ))}
    </Flicking>
  );
}

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
  bottom: 15px;
  left: 0;
  right: 0;
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
  margin-top: 20px;
  border-radius: 2px;
  background-color: #fff;
  height: 4px;
`;
