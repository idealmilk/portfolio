import { motion } from "framer-motion";
import styled from "styled-components";

export const SpinnerWrap = styled.div`
  position: relative;
  width: 48%;
  height: auto;
  margin-top: 12rem;

  img,
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

  img {
    width: 16rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      width: 8rem;
    }

    .circle {
      height: 12.6rem !important;
      width: 12.6rem !important;
      span {
        font-size: 1.1rem;
        transform-origin: center 6em 0px !important;
      }
    }
  }
`;
