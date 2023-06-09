import cn from 'classnames';
import useOnScreen from 'hooks/useOnScreen';
import React, { useRef } from 'react';

import './styled';
import { ItemContainer, ItemInfo, ItemWrap } from './styled';

type GalleryItemProps = {
  homeImage: string;
  category: string;
  clientName: string;
  background: string;
  // updateActiveImage: Function;
  // index: number;
};

const GalleryItem = ({
  homeImage,
  category,
  clientName,
  background,
}: // updateActiveImage,
// index,
GalleryItemProps) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  // useEffect(() => {
  //   if (onScreen) {
  //     updateActiveImage(index);
  //   }
  // }, [onScreen, index]);

  return (
    <ItemContainer
      className={cn('gallery-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div />
      <ItemWrap background={background}>
        <ItemInfo>
          <h3>{clientName}</h3>
          <p>{category}</p>
        </ItemInfo>

        <div className='item-image-wrap'>
          <img src={homeImage} alt={clientName} />
        </div>
      </ItemWrap>
      <div />
    </ItemContainer>
  );
};

export default GalleryItem;
