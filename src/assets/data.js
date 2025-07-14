import images from './images';

const menu = {
  커피: [
    {
      id: 0,
      name: '아메리카노',
      description: '에스프레소에 물을 섞은 커피',
      price: 3500,
      img: images.americano,
    },
    {
      id: 1,
      name: '카페라떼',
      description: '우유에 에스프레소 샷을 넣은 커피',
      price: 4000,
      img: images.cafelatte,
    },
    {
      id: 2,
      name: '바닐라라떼',
      description: '우유에 에스프레소 샷과 바닐라 시럽을 넣은 커피',
      price: 4300,
      img: images.vanillalatte,
    },
    {
      id: 3,
      name: '카페모카',
      description: '초콜릿 소스와 에스프레소 샷을 우유에 넣은 커피',
      price: 4500,
      img: images.cafemocha,
    },
  ],
  논커피: [
    {
      id: 4,
      name: '초콜릿 라떼',
      description: '달콤한 초콜릿 음료',
      price: 4800,
      img: images.choco,
    },
    {
      id: 5,
      name: '딸기 블렌디드',
      description: '딸기와 우유를 얼음과 함께 갈아만든 음료',
      price: 5500,
      img: images.strawberry,
      allowTemperature: ['ICE'], //아이스만 가능
    },
    {
      id: 6,
      name: '바나나 블렌디드',
      description: '생과일 바나나와 함께 갈아 만든 음료',
      price: 5500,
      img: images.banana,
      allowTemperature: ['ICE'], //아이스만 가능
    },
    {
      id: 7,
      name: '녹차',
      description: '제주',
      price: 4000,
      img: images.greentea,
    },
  ],
};

const options = {
  온도: ['HOT', 'ICE'],
  진하기: ['연하게', '보통', '진하게'],
  사이즈: ['Tall', 'Grande', 'Venti'],
};

const data = { menu, options };

export default data;
