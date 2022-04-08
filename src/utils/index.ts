export const numberWithComma = (count: number) => {
  return new Intl.NumberFormat('ko-KR').format(count);
};

export const addZero = (value: number) => {
  return String(value).length === 1 ? `0${String(value)}` : String(value);
};

export const remainTime = (distance: number) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return [days * 24 + hours, minutes, seconds];
};
