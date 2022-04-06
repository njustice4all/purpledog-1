export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};
