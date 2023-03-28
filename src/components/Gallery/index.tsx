import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import "./styled";
import GalleryItem from "./Item";
import { Container } from "./styled";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "New Edge Studio",
    category: "Design / Development",
    background: "blue",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "The Glow",
    category: "Design / Development",
    background: "red",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "SciLeads",
    category: "Development",
    background: "yellow",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Second Life",
    category: "Shooting / Adv.Campaing",
    background: "blue",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index: number) => {
    setActiveImage(index + 1);
  };

  return (
    <Container>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          index={index}
          {...image}
          updateActiveImage={handleUpdateActiveImage}
        />
      ))}
    </Container>
  );
};

export default Gallery;
