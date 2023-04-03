import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 10rem;
  width: 100vw;
  color: ${(props) => props.theme.colors.black};
  z-index: 10000;
`;

export const InnerWrap = styled(motion.div)`
  width: 13rem;
  margin: 0 auto;
  justify-content: space-between;

  svg {
    color: white;
    margin: 0 1rem;
    transition: opacity 0.125s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
