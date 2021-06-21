import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CarouselSlide from './react';
import TrendCard from '../TrendCard/react';
import Readme from './react.README.md';

storiesOf('CarouselSlide', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const squareImage = boolean('Square image', false);
    return (
      <CarouselSlide>
        <TrendCard
          title='Why Stile and Rail Doors are Worth the Investment'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/8hui9fjtwo/exact/Harring_Hotel%20Indigo_2_L2.jpeg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Attack Resistant Door Opening'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/download/masonite/ja05d7snlv/Attack-Resiatant_Library_mobil.jpg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Reasons to Use Acoustically-Rated Doors in Healthcare Construction'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/v5g5khzopv/exact/CHUM_020706_10_N407.jpeg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Adding Security Features to Wood Doors in Office Construction'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/download/masonite/rhcsfxmw8l/Etsy_CF041517_2.jpg'
          squareImage={squareImage}
        />
        <TrendCard
          title='The Most In-Demand Colors for Factory Painted Doors for 2020'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/yxzvpmqv3y/300x300px/MDF-3-Panel-MockShaker-CEN301-WinterWhite-bty.jpeg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Variations of Authentic Wood Veneers for Doors'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/m6wbtcs5ft/exact/Hotel%20Indigo_bar%20area_L8.jpeg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Why Stile and Rail Doors are Worth the Investment'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/8hui9fjtwo/exact/Harring_Hotel%20Indigo_2_L2.jpeg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Attack Resistant Door Opening'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/download/masonite/ja05d7snlv/Attack-Resiatant_Library_mobil.jpg'
          squareImage={squareImage}
        />
        <TrendCard
          title='Reasons to Use Acoustically-Rated Doors in Healthcare Construction'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/v5g5khzopv/exact/CHUM_020706_10_N407.jpeg'
          squareImage={squareImage}
        />
      </CarouselSlide>
    );
  });
