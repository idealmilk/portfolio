import React, { useState } from "react";
import Ticker from "react-ticker";

import PageVisibility from "react-page-visibility";
import { Container } from "./styled";

type TileProps = {
  text: string;
};

const Tile = ({ text }: TileProps) => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <Container>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={12}>
            {() => <h3 style={{ marginRight: "6rem" }}>{text}</h3>}
          </Ticker>
        )}
      </PageVisibility>
    </Container>
  );
};

export default Tile;
