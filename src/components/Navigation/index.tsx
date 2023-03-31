import React, { MouseEventHandler } from "react";
import { Link } from "gatsby";

import { Container, TileWrap } from "./styled";
import Tile from "components/Tile";

type NavigationProps = {
  projectEnter: MouseEventHandler;
  projectLeave: MouseEventHandler;
  setProjectColor: Function;
  setProjectTextColor: Function;
};

const Navigation = ({
  projectEnter,
  projectLeave,
  setProjectColor,
  setProjectTextColor,
}: NavigationProps) => {
  return (
    <Container>
      <TileWrap>
        <div
          style={{ height: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(241,202,4,1)");
            setProjectTextColor("black");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="New Edge Studio"
            variants={{
              background: "yellow",
              text: "black",
              height: "65vh",
              width: "35vw",
            }}
          />
        </div>
        <div
          style={{ height: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(212,2,3,1)");
            setProjectTextColor("white");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="The Glow"
            variants={{
              background: "red",
              text: "white",
              height: "35vh",
              width: "45vw",
            }}
          />
        </div>
        <div
          style={{ height: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(21,1,237,1)");
            setProjectTextColor("white");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="SciLeads"
            variants={{
              background: "blue",
              text: "white",
              height: "50vh",
              width: "25.4vw",
            }}
          />
        </div>
      </TileWrap>
    </Container>
  );
};

export default Navigation;
