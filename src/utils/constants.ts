import ImageAmerica from 'assets/america.png';
import ImageAustralia from 'assets/australia.png';
import ImageFrance from 'assets/france.png';
import ImageItaly from 'assets/italy.png';
import ImagePortugal from 'assets/portugal.png';
import ImageSpain from 'assets/spain.png';

import NavHome from 'assets/nav-home.svg';
import NavMagazine from 'assets/nav-magazine.svg';
import NavCategory from 'assets/nav-category.svg';
import NavFeed from 'assets/nav-feed.svg';
import NavMy from 'assets/nav-my.svg';

export const COUNTRY = [
  { src: ImageFrance, label: '프랑스' },
  { src: ImageItaly, label: '이탈리아' },
  { src: ImageAmerica, label: '미국' },
  { src: ImagePortugal, label: '포르투갈' },
  { src: ImageAustralia, label: '호주' },
  { src: ImageSpain, label: '스페인' },
];

export const routes = [
  {
    src: NavHome,
    label: '홈',
  },
  {
    src: NavMagazine,
    label: '매거진',
  },
  {
    src: NavCategory,
    label: '카테고리',
  },
  {
    src: NavFeed,
    label: '피드',
  },
  {
    src: NavMy,
    label: '내정보',
  },
];
