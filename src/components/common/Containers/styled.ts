import { motion } from "framer-motion";
import styled from "styled-components";

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130rem;
  max-width: 86%;
  margin: 0 auto;
`;

export const TextWrap = styled(motion.div)`
  width: 50%;
  margin: auto 0;
  p {
    font-size: 2.8rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

export const ImgWrap = styled.div`
  width: 35%;
  text-align: center;
`;
