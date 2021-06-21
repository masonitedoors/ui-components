import React from 'react';
import { render } from '@testing-library/react';
import CarouselSlide from './react';
import TrendCard from '../TrendCard/react';

describe('CarouselSlide', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <CarouselSlide>
        <TrendCard
          title='Why Stile and Rail Doors are Worth the Investment'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/8hui9fjtwo/exact/Harring_Hotel%20Indigo_2_L2.jpeg'
          squareImage
        />
        <TrendCard
          title='Attack Resistant Door Opening'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/download/masonite/ja05d7snlv/Attack-Resiatant_Library_mobil.jpg'
          squareImage
        />
        <TrendCard
          title='Reasons to Use Acoustically-Rated Doors in Healthcare Construction'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image='https://embed.widencdn.net/img/masonite/v5g5khzopv/exact/CHUM_020706_10_N407.jpeg'
          squareImage
        />
      </CarouselSlide>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
