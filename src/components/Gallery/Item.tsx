import cn from "classnames";
import React, { useEffect, useRef } from "react";
import useOnScreen from "hooks/useOnScreen";

import "./styled";
import { ItemContainer, ItemInfo, ItemWrap } from "./styled";

type GalleryItemProps = {
  src: string;
  category: string;
  title: string;
  background: string;
  updateActiveImage: Function;
  index: number;
};

const GalleryItem = ({
  src,
  category,
  title,
  background,
  updateActiveImage,
  index,
}: GalleryItemProps) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <ItemContainer
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div />
      <ItemWrap background={background}>
        <ItemInfo>
          <h3>{title}</h3>
          <p>{category}</p>
        </ItemInfo>

        <div className="item-image-wrap">
          <div
            className="item-image"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      </ItemWrap>
      <div />
    </ItemContainer>
  );
};

export default GalleryItem;
