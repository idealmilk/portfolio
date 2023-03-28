import styled from "styled-components";

export const Container = styled.div`
  .ticker__element {
    width: calc(100% + 50rem);
  }

  h3 {
    font-size: 20rem;
    padding: 0 6rem 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    .ticker__element {
      width: calc(100% + 80rem);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    .ticker__element {
      width: calc(100% + 120rem);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    .ticker__element {
      width: calc(100% + 145rem);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h3 {
      font-size: 10rem;
      padding: 3rem 6rem;
    }
    .ticker__element {
      width: calc(100% + 80rem);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    h3 {
      font-size: 6rem;
    }
    .ticker__element {
      width: calc(100% + 50rem);
    }
  }
`;
