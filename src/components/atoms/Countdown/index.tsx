import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import IconClock from 'assets/icon-time.svg';
import { useInterval } from 'hooks/useInterval';
import { addZero } from 'utils';

interface ICountdown {
  endDate: string;
}

export default function Countdown({ endDate }: ICountdown) {
  const now = dayjs();
  const [countDown, setCountDown] = useState({ hour: 0, minute: 0, second: 0 });

  useInterval(() => {
    setCountDown({
      hour: Math.abs(now.diff(dayjs(endDate), 'hour')),
      minute: 59 - now.get('minute'),
      second: 59 - now.get('second'),
    });
  }, 1000);

  const { hour, minute, second } = countDown;
  const isExpired = now.isAfter(endDate);

  if (isExpired) {
    return <div>만료</div>;
  }

  return (
    <Container>
      <Icon src={IconClock} alt="남은시간" />
      <span>
        {addZero(hour)}:{addZero(minute)}:{addZero(second)} 남음
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
