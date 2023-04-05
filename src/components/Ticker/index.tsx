import React from 'react';

import { Container } from './styled';

type TileProps = {
  text: string;
};

const Tile = ({ text }: TileProps) => {
  return (
    <Container>
      <div className='ticker-wrap'>
        <div className='ticker'>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
          <div className='ticker__item'>{text}</div>
        </div>
      </div>
    </Container>
  );
};

export default Tile;
