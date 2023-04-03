import { motion, useAnimation } from "framer-motion";
import React, { MouseEventHandler, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { InnerWrap, ImgWrap, TextWrap } from "components/common/Wraps/styled";
import { Experience, Image, Spinner, Ticker } from "components";
import DisplayPic from "images/matt.webp";
import { LanguageContext } from "context/LanguageContext";

type AboutProps = {
  faceEnter: MouseEventHandler;
  faceLeave: MouseEventHandler;
};

const AboutContainer = ({ faceEnter, faceLeave }: AboutProps) => {
  const controls = useAnimation();
  const [aboutTextRef, inView] = useInView();
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

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
      <Ticker text={isEnglish ? "A fearless introduction" : "プロフィール"} />
      <InnerWrap>
        <ImgWrap>
          <div
            onMouseEnter={faceEnter}
            onMouseLeave={faceLeave}
            style={{
              position: "absolute",
              height: "180px",
              width: "160px",
              zIndex: 100,
              top: "70px",
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
            {isEnglish
              ? "Prior to moving to Japan, Matthew worked as a Software Engineer for a data marketing company, before eventually moving on to freelancing as a Web Developer with London based digital agency, New Edge Studio."
              : "イギリスにてデータマーケティング会社のソフトウェアエンジニアとして働き、退職後デザイン事務所 New Edge Studioにてウェブデベロッパーとしてフリーランス所属。"}
          </p>
          <p>
            {isEnglish
              ? "His passion for design is evident in every aspect of his work. As he crafts the frontend experience, he carefully considers each element, seeking to create a cohesive whole that is both visually stunning and intuitively usable."
              : "フロントエンドエクスペリエンスを構築する際には、各要素を慎重に検討し、視覚的に美しく、直感的に使用でき、まとまりのある全体感を作り上げることを追求しています。"}
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
