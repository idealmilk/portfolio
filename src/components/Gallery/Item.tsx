import cn from "classnames";
import React, { useEffect, useRef } from "react";
import useOnScreen from "hooks/useOnScreen";

import "./styled";

type GalleryItemProps = {
  src: string;
  category: string;
  subtitle: string;
  title: string;
  updateActiveImage: Function;
  index: number;
};

const GalleryItem = ({
  src,
  category,
  subtitle,
  title,
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
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
};

export default GalleryItem;
