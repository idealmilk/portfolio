import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useInView } from "react-intersection-observer";

import { Container } from "./styled";

type ImageProps = {
  image: string;
};

const Image = ({ image }: ImageProps) => {
  const [hasRun, setHasRun] = useState(false);
  const [imageContainerRef, inView] = useInView();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (inView && !hasRun) {
      let imageReveal = CSSRulePlugin.getRule(".image-container::after");
      setHasRun(true);
      gsap.set(containerRef.current, { visibility: "visible" });

      gsap
        .timeline()
        .to(imageReveal, {
          duration: 1.4,
          width: "0%",
          ease: "power2.inOut",
        })
        .from(imageRef.current, {
          duration: 1.4,
          scale: 1.6,
          ease: "power2.inOut",
          delay: -1.4,
        });
    }
  }, [inView, []]);

  return (
    <Container ref={containerRef}>
      <>
        <div className="image-container" ref={imageContainerRef}>
          <img ref={imageRef} src={image} />
        </div>
      </>
    </Container>
  );
};

export default Image;
