import { motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Form, Ticker } from "components";
import { InnerWrap, TextWrap } from "components/common/Wraps/styled";
import { LanguageContext } from "context/LanguageContext";

const ContactContainer = () => {
  const controls = useAnimation();
  const [contactTextRef, inView] = useInView();
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
    <section id="contact">
      <Ticker text={isEnglish ? "Inquiries and Invective" : "連絡"} />
      <InnerWrap style={{ marginBottom: "20rem" }}>
        <TextWrap
          as={motion.div}
          ref={contactTextRef}
          animate={controls}
          initial="hidden"
          variants={textVariants}
        >
          <p>
            {isEnglish
              ? "At present, I am endeavoring to secure gainful employment in the bustling metropolis of Tokyo. However, until such a time as a suitable position presents itself, I remain open to the prospect of engaging in freelance endeavors. Should you possess an interest in collaborating on forthcoming projects or engaging in a colloquy of sorts, I implore you to extend an invitation to yours truly."
              : "現在、私は東京の活気ある大都市で有為な雇用を確保するために努力しています。しかし、適当なポジションが見つかるまでは、フリーランスとして活動することも可能である。もし、あなたが今後のプロジェクトで協力したり、ある種の談話をすることに興味をお持ちでしたら、ぜひ、私までお誘いください。"}
          </p>
        </TextWrap>
        <Form />
      </InnerWrap>
    </section>
  );
};

export default ContactContainer;
