import React from "react";
import { motion } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Container, HamburgerMenu, HeaderInner, Logo, Nav } from "./styled";
import { Link } from "gatsby";

const Header = () => {
  return (
    <Container
      as={motion.section}
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <HeaderInner>
        <Logo>
          <Link to="/">Matthew Gilligan</Link>
        </Logo>
        <Nav>
          <AnchorLink to="#about" title="About" />
          <AnchorLink to="#work" title="Work" />
          <AnchorLink to="#contact" title="Contact" />
        </Nav>

        <HamburgerMenu>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </HeaderInner>
    </Container>
  );
};

export default Header;
