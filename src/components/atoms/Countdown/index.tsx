import React, { useState } from 'react';
import styled from 'styled-components';

import IconClock from 'assets/icon-time.svg';
import { useInterval } from 'hooks/useInterval';
import { addZero, remainTime } from 'utils';

interface ICountdown {
  endDate: string;
}

export default function Countdown({ endDate }: ICountdown) {
  const end = new Date(endDate).getTime();
  const now = new Date().getTime();
  const [countDown, setCountDown] = useState(end - now);

  useInterval(() => {
    setCountDown(end - new Date().getTime());
  }, 1000);

  const [hours, minutes, seconds] = remainTime(countDown);
  const isExpired = end - now <= 0;

  if (isExpired) {
    return <div>만료</div>;
  }

  return (
    <Container>
      <Icon src={IconClock} alt="남은시간" />
      <span>
        {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)} 남음
      </span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: #ff0045;
  color: #fff;
  border-radius: 2px;
  padding: 4px 5px;
  font-size: 10px;
`;

const Icon = styled.img`
  margin-right: 2px;
`;
