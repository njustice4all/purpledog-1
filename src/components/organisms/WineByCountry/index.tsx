import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'modules/rootState';
import Description from 'components/atoms/Description';
import Title from 'components/atoms/Title';
import { COUNTRY } from 'utils/constants';

export default function WineByCountry() {
  const text = useSelector((state: RootState) => state.text);

  const title = text['COUNTRY_WINE_TITLE'];
  const description = text['COUNTRY_WINE__DESCRIPTION'];

  return (
    <>
      <Title>{title ? title.content : '...'}</Title>
      <Description>{description ? description.content : '...'}</Description>
      <ContryWrap>
        {COUNTRY.map(({ src, label }, idx) => (
          <Wrap key={idx}>
            <img src={src} alt={label} />
            <Label>{label}</Label>
          </Wrap>
        ))}
      </ContryWrap>
    </>
  );
}

const ContryWrap = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-size: 14px;
  color: #fff;
  position: absolute;
  left: 20px;
`;
