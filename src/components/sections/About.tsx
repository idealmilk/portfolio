import { motion, useAnimation } from "framer-motion";
import React, { MouseEventHandler, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InnerWrap, ImgWrap, TextWrap } from "components/common/Wraps/styled";
import { Experience, Image, Spinner, Ticker } from "components";
import DisplayPic from "images/matt.webp";

type AboutProps = {
  faceEnter: MouseEventHandler;
  faceLeave: MouseEventHandler;
};

const AboutContainer = ({ faceEnter, faceLeave }: AboutProps) => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 300 },
  };

  return (
    <section id="about">
      <Ticker text="A fearless introduction" />
      <InnerWrap>
        <ImgWrap>
          <div
            onMouseEnter={faceEnter}
            onMouseLeave={faceLeave}
            style={{
              position: "absolute",
              height: "140px",
              width: "120px",
              zIndex: 100,
              top: "88px",
              left: "160px",
            }}
          />
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
            vision to life. With each line of code, he brings the design to the
            forefront, seamlessly blending functionality with aesthetics.
          </p>
          <p>
            His passion for design is evident in every aspect of his work. As he
            crafts the frontend experience, he carefully considers each element,
            seeking to create a cohesive whole that is both visually stunning
            and intuitively usable.
          </p>
        </TextWrap>
      </InnerWrap>
      <InnerWrap style={{ marginBottom: "20rem" }}>
        <Experience />
        <Spinner text="Blending functionality with aesthetics - " />
      </InnerWrap>
    </section>
  );
};

export default AboutContainer;
