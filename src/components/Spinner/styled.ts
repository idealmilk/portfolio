import { motion } from "framer-motion";
import styled from "styled-components";

export const SpinnerWrap = styled.div`
  position: relative;
  width: 48%;
  height: auto;
  margin-top: 12rem;

  .circle-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle {
    height: 30rem !important;
    width: 30rem !important;
    span {
      font-size: 2.6rem;
      transform-origin: center 6em 0px !important;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding-bottom: 2rem;

    .circle {
      height: 22.1rem !important;
      width: 22.1rem !important;
      span {
        font-size: 1.8rem;
        transform-origin: center 6em 0px !important;
      }
    }
  }
`;
