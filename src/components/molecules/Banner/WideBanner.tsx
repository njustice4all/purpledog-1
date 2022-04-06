import React from 'react';
import styled from 'styled-components';

interface IWideBanner {
  url: string;
  label?: string[];
}

export default function WideBanner({ url, label }: IWideBanner) {
  return (
    <Wrap>
      {url ? <Image src={url} /> : <Empty />}
      <Label>{label && label.map((str, idx) => <div key={idx}>{str}</div>)}</Label>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  color: #fff;
  position: absolute;
  left: 20px;
  div {
    line-height: 24px;
  }
`;

const Empty = styled.div`
  width: 345px;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
