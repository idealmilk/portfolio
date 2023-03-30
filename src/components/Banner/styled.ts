import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  z-index: 100;
  position: fixed;
  top: 10rem;
  left: 9.7rem;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    top: 4rem;
    left: 6.4rem;
  }
`;

export const BannerRow = styled.div`
  overflow-y: hidden;
  overflow-x: visible;
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    &:first-child {
      margin-top: 48px;
    }
  }
`;

export const RowTitle = styled(motion.div)`
  position: relative;
  white-space: nowrap;
`;

export const RowLetter = styled(motion.span)`
  font-size: 12rem;
  font-weight: 500;
  position: relative;
  letter-spacing: -0.8rem;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 13rem;
  }
`;

export const RowCol = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  @media (max-width: 1240px) {
    &:last-child {
      display: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;
