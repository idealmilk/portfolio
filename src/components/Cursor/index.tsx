import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { Container } from "./styled";

type CustomCursorProps = {
  isOverContent: boolean;
};

const CustomCursor = ({ isOverContent }: CustomCursorProps) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const followerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    const cursor = cursorRef.current;

    const updatePosition = () => {
      setPosX(mouseX - 20);
      setPosY(mouseY - 20);
    };

    const onUpdateCursor = () => {
      if (isMouseMoving && (mouseX !== lastMouseX || mouseY !== lastMouseY)) {
        gsap.to(followerRef.current, { left: posX, top: posY, duration: 0.15 });
        gsap.to(cursorRef.current, {
          left: mouseX,
          top: mouseY,
          duration: 0.1,
        });
        setLastMouseX(mouseX);
        setLastMouseY(mouseY);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      setIsMouseMoving(true);
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
      gsap.to(follower, { opacity: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      gsap.to(follower, { opacity: 0, duration: 0.2 });
      setIsMouseMoving(false);
    };

    gsap.to(
      {},
      {
        repeat: -1,
        duration: 0.016,
        onUpdate: onUpdateCursor,
      }
    );

    updatePosition();

    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll(".portfolio-item img").forEach((item) => {
      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll(".portfolio-item img").forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [mouseX, mouseY, isMouseMoving]);

  return (
    <Container isOverContent={isOverContent}>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </Container>
  );
};

export default CustomCursor;
