import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 50%;
  margin-top: 6rem;
  overflow: hidden;

  h3 {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;

    tbody {
      width: 100%;

      tr {
        height: 4rem;

        td {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const TableDivider = styled.div`
  width: 100%;
`;

export const Divider = styled(motion.div)`
  height: 1px;
  background: white;
  width: 100%;
`;
