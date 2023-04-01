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
          style={{ height: "100%", width: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(241,202,4,1)");
            setProjectTextColor("black");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="SciLeads"
            url="https://scileads.com/"
            index="03"
            role="Development"
            year="2021"
            variants={{
              backgroundColor: "yellow",
              textColor: "black",
              height: "65vh",
              width: "35vw",
            }}
          />
        </div>
        <div
          style={{ height: "100%", width: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(212,2,3,1)");
            setProjectTextColor("white");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="The Glow"
            url="https://www.theglow.jp/"
            index="02"
            role="Branding, Design, Development"
            year="2022"
            variants={{
              backgroundColor: "red",
              textColor: "white",
              height: "35vh",
              width: "45vw",
            }}
          />
        </div>
        <div
          style={{ height: "100%", width: "100%" }}
          onMouseEnter={(e) => {
            setProjectColor("rgba(21,1,237,1)");
            setProjectTextColor("white");
            projectEnter(e);
          }}
          onMouseLeave={projectLeave}
        >
          <Tile
            text="New Edge Studio"
            url="https://newedgestud.io/"
            index="01"
            role="Design, Development"
            year="2023"
            variants={{
              backgroundColor: "blue",
              textColor: "white",
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
