import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import { Projects } from "data/Projects";

import "./styled";
import GalleryItem from "./Item";
import { Container } from "./styled";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index: number) => {
    setActiveImage(index + 1);
  };

  return (
    <Container>
      {Projects.map((project, index) => (
        <GalleryItem
          key={index}
          index={index}
          {...project}
          updateActiveImage={handleUpdateActiveImage}
        />
      ))}
    </Container>
  );
};

export default Gallery;
