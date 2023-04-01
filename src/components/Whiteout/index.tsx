import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 10000000;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

type WhiteoutProps = {
  showWhiteout: any;
};

const Whiteout = ({ showWhiteout }: WhiteoutProps) => {
  return (
    <Container id="whiteout">
      {showWhiteout && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </Container>
  );
};

export default Whiteout;