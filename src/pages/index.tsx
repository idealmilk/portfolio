import type { PageProps } from "gatsby";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";

import { Banner, Header, Navigation } from "components";
import { About, Contact, Work } from "sections";
import Whiteout from "components/Whiteout";

const Content = styled.div`
  position: absolute;
  top: 100vh;
  width: 100vw;
  color: white;
  background: black;
  z-index: 10000;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [defaultCursorColor, setIsDefaultCursorColor] = useState("black");

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [projectColor, setProjectColor] = useState("");
  const [projectTextColor, setProjectTextColor] = useState("");

  const [showWhiteout, setShowWhiteout] = useState(false);

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: number | null = 0;
  let mouseYPosition: number | null = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: defaultCursorColor,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: projectColor,
      color: projectTextColor,
      border: `1px solid ${projectTextColor}`,
      height: 80,
      width: 80,
      fontSize: "36px",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      paddingTop: "14px",
      x: mouseXPosition ? mouseXPosition - 32 : 0,
      y: mouseYPosition ? mouseYPosition - 32 : 0,
    },
    contact: {
      opacity: 1,
      backgroundColor: "transparent",
      color: "#000",
      height: 120,
      width: 120,
      fontSize: "120px",
      x: mouseXPosition ? mouseXPosition - 48 : 0,
      y: mouseYPosition ? mouseYPosition - 48 : 0,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = () => {
    setCursorText("↗");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const faceEnter = () => {
    setCursorText("🙃");
    setCursorVariant("contact");
  };

  const faceLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return (
    <main ref={ref}>
      <Whiteout showWhiteout={showWhiteout} />
      <motion.div
        variants={variants}
        className="cursor"
        animate={cursorVariant}
        transition={spring}
      >
        {cursorText}
      </motion.div>
      <Header setShowWhiteout={setShowWhiteout} />
      <Banner />
      <Navigation
        projectEnter={projectEnter}
        projectLeave={projectLeave}
        setProjectColor={setProjectColor}
        setProjectTextColor={setProjectTextColor}
      />
      <Content
        onMouseEnter={() => setIsDefaultCursorColor("white")}
        onMouseLeave={() => setIsDefaultCursorColor("black")}
      >
        <About faceEnter={faceEnter} faceLeave={faceLeave} />
        {/* <Work /> */}
        <Contact />
      </Content>
    </main>
  );
};

export default IndexPage;
