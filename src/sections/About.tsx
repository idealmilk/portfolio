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
      <Ticker text={isEnglish ? "A fearless introduction" : "自己紹介"} />
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
              ? "Matthew's hands dance over the keyboard as he works to bring his vision to life. With each line of code, he brings the design to the forefront, seamlessly blending functionality with aesthetics."
              : "マシューの手はキーボードの上で踊りながら、自分の作品を世に送り出すために働いている。 ビジョンに命を吹き込む。コードの一行一行で、彼はデザインを実現します。 機能性と美しさをシームレスに融合させた最前線。"}
          </p>
          <p>
            {isEnglish
              ? "His passion for design is evident in every aspect of his work. As he crafts the frontend experience, he carefully considers each element, seeking to create a cohesive whole that is both visually stunning and intuitively usable."
              : "彼のデザインに対する情熱は、仕事のあらゆる側面に表れています。フロントエンドエクスペリエンスを構築する際には、各要素を慎重に検討し、視覚的に美しく、直感的に使用できるまとまりのある全体を作り上げることを追求しています。"}
          </p>
        </TextWrap>
      </InnerWrap>
      <InnerWrap style={{ marginBottom: "20rem" }}>
        <Experience />
        <Spinner
          text={
            isEnglish
              ? "Blending functionality with aesthetics - "
              : "機能性と審美性の融合 - "
          }
        />
      </InnerWrap>
    </section>
  );
};

export default AboutContainer;
