import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

import { LanguageContext } from "context/LanguageContext";

import { Container, HamburgerMenu, HeaderInner, Logo, Nav } from "./styled";

type HeaderProps = {
  setShowWhiteout: any;
};

const Header = ({ setShowWhiteout }: HeaderProps) => {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    const whiteout = document.getElementById("whiteout");
    if (whiteout) {
      whiteout.style.display = "block";
    }

    setShowWhiteout(true);

    setTimeout(() => {
      toggleLanguage();
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }, 1000);
  };

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
          <Link to="/">
            {isEnglish ? "Matthew Gilligan" : "ギリガンマシュー"}
          </Link>
        </Logo>
        <Nav>
          <AnchorLink to="#about" title={isEnglish ? "About" : "自己紹介"} />
          {/* <AnchorLink to="#work" title="Work" /> */}
          <AnchorLink to="#contact" title={isEnglish ? "Contact" : "連絡"} />
          <button onClick={handleLanguageToggle}>
            {isEnglish ? "日本語" : "EN"}
          </button>
        </Nav>

        <HamburgerMenu>
          <button onClick={handleLanguageToggle}>
            {isEnglish ? "日本語" : "EN"}
          </button>
        </HamburgerMenu>
      </HeaderInner>
    </Container>
  );
};

export default Header;
