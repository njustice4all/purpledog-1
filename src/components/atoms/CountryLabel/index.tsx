import React from 'react';
import styled from 'styled-components';

interface ICountryLabel {
  countryName: string;
  type: string;
}

export default function CountryLabel({ countryName, type }: ICountryLabel) {
  return (
    <Label>
      {countryName} <Dot /> {type}
    </Label>
  );
}

const Label = styled.div`
  font-size: 11px;
  color: #cbcbcb;
`;

const Dot = styled.span`
  display: inline-block;
  width: 2px;
  height: 2px;
  background-color: #cbcbcb;
  margin: 0 2px;
  vertical-align: super;
  border-radius: 2px;
`;
