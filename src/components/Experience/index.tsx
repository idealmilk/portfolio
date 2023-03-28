import { motion } from "framer-motion";
import React from "react";
import { Container, Divider } from "./styled";

const Experience = () => {
  return (
    <Container as={motion.div}>
      <table>
        <tbody>
          <tr>
            <td>Experience</td>
          </tr>
          <tr>
            <td>New Edge Studio</td>
            <td>Freelance Developer</td>
            <td>2022 - </td>
          </tr>
          <Divider as={motion.div} />
          <tr>
            <td>SciLeads</td>
            <td>Software Engineer</td>
            <td>2020 - 2022</td>
          </tr>
          <Divider as={motion.div} />
        </tbody>
      </table>
    </Container>
  );
};

export default Experience;
