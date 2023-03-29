import type { PageProps } from "gatsby";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Banner from "components/Banner";
import {
  ImgWrap,
  InnerWrap,
  TextWrap,
} from "components/common/Containers/styled";
import Experience from "components/Experience";
import Form from "components/Form";
import Header from "components/Header";
import Image from "components/Image";
import Navigation from "components/Navigation";
import Spinner from "components/Spinner";
import Ticker from "components/Ticker";
import DisplayPic from "images/matt.webp";
import styled from "styled-components";
import Gallery from "components/Gallery";

const Content = styled.div`
  position: absolute;
  top: 100vh;
  width: 100vw;
  color: white;
  background: black;
  z-index: 10000;
`;

const textVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 300 },
};

const IndexPage: React.FC<PageProps> = () => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <main>
      <Header />
      <Banner />
      <Navigation />
      <Content>
        <div id="about" />
        <Ticker text="A fearless introduction" />
        <InnerWrap>
          <ImgWrap>
            <Image image={DisplayPic} />
          </ImgWrap>
          <TextWrap
            as={motion.div}
            ref={aboutTextRef}
            animate={controls}
            initial="hidden"
            variants={textVariants}
          >
            <p>
              Matthew's hands dance over the keyboard as he works to bring his
              vision to life. With each line of code, he brings the design to
              the forefront, seamlessly blending functionality with aesthetics.
            </p>
            <p>
              His passion for design is evident in every aspect of his work. As
              he crafts the frontend experience, he carefully considers each
              element, seeking to create a cohesive whole that is both visually
              stunning and intuitively usable.
            </p>
          </TextWrap>
        </InnerWrap>
        <InnerWrap style={{ marginBottom: "20rem" }}>
          <Experience />
          <Spinner text="Blending functionality with aesthetics - " />
        </InnerWrap>
        å
        <div id="work" />
        <Ticker text="Frontend Virtuosity" />
        <Gallery />
        <div id="contact" />
        <Ticker text="Inquiries and Invective" />
        <InnerWrap style={{ marginBottom: "20rem" }}>
          <TextWrap>
            <p>
              At present, I am endeavoring to secure gainful employment in the
              bustling metropolis of Tokyo. However, until such a time as a
              suitable position presents itself, I remain open to the prospect
              of engaging in freelance endeavors. Should you possess an interest
              in collaborating on forthcoming projects or engaging in a colloquy
              of sorts, I implore you to extend an invitation to yours truly.
            </p>
          </TextWrap>
          <Form />
        </InnerWrap>
      </Content>
    </main>
  );
};

export default IndexPage;
