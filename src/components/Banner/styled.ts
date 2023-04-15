import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  z-index: 100;
  position: fixed;
  top: 10rem;
  left: 0;

  width: 100vw;
  padding: 0 10.8rem 0 9.7rem;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

export const InnerWrap = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

type EnglishProp = {
  isEnglish?: boolean;
};

export const BannerRow = styled.div<EnglishProp>`
  overflow-x: visible;
  overflow-y: hidden;
  display: flex;
  padding-right: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    &:first-child {
      margin-top: 2rem;
      margin-bottom: 1.8rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    &:first-child {
      margin-top: 7rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    &:first-child {
      margin-top: 3rem;
      margin-bottom: ${(props) => (props.isEnglish ? '1.8rem' : '5rem')};
    }
  }
`;

export const RowTitle = styled(motion.div)`
  position: relative;
  white-space: nowrap;
`;

export const RowLetter = styled(motion.span)<EnglishProp>`
  font-size: 12rem;
  font-weight: 500;
  position: relative;
  letter-spacing: -0.8rem;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 10rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    font-size: 8rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    font-size: 8rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    font-size: ${(props) => (props.isEnglish ? '8rem' : '5rem')};
  }
`;

export const RowCol = styled.div`
  align-content: center;
  justify-content: center;

  p {
    transform: translate(0, 120px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    p {
      transform: translate(0);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;
