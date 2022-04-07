export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const addZero = (value: number) => {
  return String(value).length === 1 ? `0${String(value)}` : String(value);
};
