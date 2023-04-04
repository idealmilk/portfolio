import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { LanguageContext } from 'context/LanguageContext';

import {
  BannerRow,
  Container,
  InnerWrap,
  RowCol,
  RowLetter,
  RowTitle,
} from './styled';

const banner = {
  animate: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

type AnimatedLettersProps = {
  title: string;
  disabled?: boolean;
  isEnglish?: boolean;
};

const AnimatedLetters = ({
  title,
  disabled,
  isEnglish,
}: AnimatedLettersProps) => (
  <RowTitle
    as={motion.div}
    variants={disabled ? {} : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <RowLetter
        as={motion.span}
        variants={disabled ? {} : letterAni}
        isEnglish={isEnglish}
      >
        {letter}
      </RowLetter>
    ))}
  </RowTitle>
);

const Banner = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <Container as={motion.div} variants={banner}>
      <InnerWrap>
        <RowCol>
          <BannerRow
            as={motion.div}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0.4,
            }}
            isEnglish={isEnglish}
          >
            <AnimatedLetters
              title={isEnglish ? 'Frontend' : 'フロントエンド'}
              isEnglish={isEnglish}
            />
          </BannerRow>
          <BannerRow style={{ marginTop: '-7rem' }}>
            <AnimatedLetters
              title={isEnglish ? 'Engineer' : 'エンジニア'}
              isEnglish={isEnglish}
            />
          </BannerRow>
        </RowCol>
        <RowCol
          as={motion.div}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.4,
          }}
        >
          <p>{isEnglish ? 'Selected Works' : '作例'}</p>
        </RowCol>
      </InnerWrap>
    </Container>
  );
};

export default Banner;
