import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Form, Ticker } from "components";
import { InnerWrap, TextWrap } from "components/common/Wraps/styled";

const ContactContainer = () => {
  const controls = useAnimation();
  const [contactTextRef, inView] = useInView();

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
      <Ticker text="Inquiries and Invective" />
      <InnerWrap style={{ marginBottom: "20rem" }}>
        <TextWrap
          as={motion.div}
          ref={contactTextRef}
          animate={controls}
          initial="hidden"
          variants={textVariants}
        >
          <p>
            At present, I am endeavoring to secure gainful employment in the
            bustling metropolis of Tokyo. However, until such a time as a
            suitable position presents itself, I remain open to the prospect of
            engaging in freelance endeavors. Should you possess an interest in
            collaborating on forthcoming projects or engaging in a colloquy of
            sorts, I implore you to extend an invitation to yours truly.
          </p>
        </TextWrap>
        <Form />
      </InnerWrap>
    </section>
  );
};

export default ContactContainer;
