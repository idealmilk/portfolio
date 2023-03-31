import styled from "styled-components";

type ContainerProps = {
  isOverContent: boolean;
};

export const Container = styled.div<ContainerProps>`
  .circle {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    background-color: #1e91d6;
    border-radius: 200px;
    pointer-events: none;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
`;
