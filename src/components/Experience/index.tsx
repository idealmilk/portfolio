import { useInView } from "framer-motion";
import React, { useRef } from "react";

import { Container, Divider, TableDivider } from "./styled";

const rows = [
  {
    company: "New Edge Studio",
    title: "Freelance Developer",
    date: "2022 - ",
  },
  { company: "SciLeads", title: "Software Engineer", date: "2020 - 2022" },
];

const Experience = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const isInView = useInView(firstRowRef, { once: true });
  const isInViewTwo = useInView(secondRowRef, { once: true });

  return (
    <Container>
      <table>
        <tbody>
          <tr style={{ height: "8rem" }}>
            <td>Experience</td>
          </tr>

          <tr className="table-row" ref={firstRowRef}>
            <td>New Edge Studio</td>
            <td>Freelance Developer</td>
            <td>2022-</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <TableDivider>
                <Divider
                  style={{
                    transform: isInView ? "none" : "translateX(-50vw)",
                    // transitionDelay: "0.4",
                    opacity: isInViewTwo ? 1 : 0.2,
                    transition:
                      "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                />
              </TableDivider>
            </td>
          </tr>
          <tr className="table-row" ref={secondRowRef}>
            <td>SciLeads</td>
            <td>Software Engineer</td>
            <td>2020-2022</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <TableDivider>
                <Divider
                  style={{
                    transform: isInViewTwo ? "none" : "translateX(-50vw)",
                    opacity: isInViewTwo ? 1 : 0.2,
                    transition:
                      "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                  }}
                />
              </TableDivider>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Experience;
