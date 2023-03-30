import type { PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Banner, Header, Navigation } from "components";
import { About, Contact, Work } from "components/containers";

import { ImgWrap, InnerWrap, TextWrap } from "components/common/Wraps/styled";

const Content = styled.div`
  position: absolute;
  top: 100vh;
  width: 100vw;
  color: white;
  background: black;
  z-index: 10000;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Banner />
      <Navigation />
      <Content>
        <About />
        <Work />
        <Contact />
      </Content>
    </main>
  );
};

export default IndexPage;
