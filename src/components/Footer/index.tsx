import React from "react";
import { GitHub, Linkedin } from "react-feather";

import { Container, InnerWrap } from "./styled";

const Footer = () => {
  return (
    <Container>
      <InnerWrap>
        <a href="https://www.linkedin.com/in/matthew-gilligan-dev/">
          <Linkedin size={30} />
        </a>
        <a href="https://github.com/idealmilk">
          <GitHub size={30} />
        </a>
      </InnerWrap>
    </Container>
  );
};

export default Footer;
