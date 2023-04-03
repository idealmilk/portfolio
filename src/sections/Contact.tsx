import { motion, useAnimation } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Form, Ticker } from 'components';
import { InnerWrap, TextWrap } from 'components/common/Wraps/styled';
import { LanguageContext } from 'context/LanguageContext';

const ContactContainer = () => {
  const controls = useAnimation();
  const [contactTextRef, inView] = useInView();
  const { isEnglish } = useContext(LanguageContext);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 300 },
  };

  return (
    <section id='contact'>
      <Ticker text={isEnglish ? 'Inquiries and Invective' : 'コンタクト'} />
      <InnerWrap style={{ marginBottom: '20rem' }}>
        <TextWrap
          as={motion.div}
          ref={contactTextRef}
          animate={controls}
          initial='hidden'
          variants={textVariants}
        >
          <p>
            {isEnglish
              ? 'Should you possess an interest in collaborating on forthcoming projects or engaging in a colloquy of sorts, I implore you to extend an invitation to yours truly.'
              : '案件のご相談はコンタクトよりお気軽にご連絡下さい。'}
          </p>
        </TextWrap>
        <Form />
      </InnerWrap>
    </section>
  );
};

export default ContactContainer;
