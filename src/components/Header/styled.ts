import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  height: 10rem;
  width: 100vw;
  padding: 0 10.8rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.black};
  z-index: 10000;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 0 7.2rem;
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 0 1.2rem;
    font-size: 1.2rem;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-weight: 700;
    font-size: 3.6rem;
    @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
      font-size: 3.2rem;
      flex: 4;
    }
  }

  a {
    position: relative;
    margin: 0 40px;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.black};
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.black};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const Logo = styled.div`
  a {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  a:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  height: 56px;
  width: 56px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  &:hover {
    background: darken($color: white, $amount: 12);
  }
  span {
    width: 20px;
    height: 3px;
    margin: 2px 0;
    background: ${(props) => props.theme.colors.black};
    display: block;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: flex;
  }
`;
