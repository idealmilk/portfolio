import styled from "styled-components";

export const Container = styled.div``;

export const ItemContainer = styled.div`
  aspect-ratio: 16/9;
  height: 60vh;
  margin: 10vh 0;
  display: grid;
  grid-template-columns: 28vw 1fr 22vw;
  width: 100vw;

  &.is-reveal {
    .item-image-wrap {
      transform: scale(1);
      filter: none;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 30vh;
    margin: 20vh 0;
    grid-template-columns: 10vw 1fr 10vw;
  }
`;

type ItemWrapProps = {
  background: string;
};

export const ItemWrap = styled.div<ItemWrapProps>`
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;

  .item-image-wrap {
    display: flex;
    background: ${(props) => props.theme.colors[props.background]};
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
  }

  img {
    transform-origin: center;
    width: 100%;
    margin: auto 0;
    will-change: transform;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  }
`;

export const ItemInfo = styled.div`
  position: absolute;
  bottom: 10%;
  z-index: 1;
  transform: translateX(-20%);
  color: #dbd8d6;
  color: white;

  h3 {
    line-height: 6vw;
    font-size: 6vw;
    -webkit-font-smoothing: antialiased;
  }

  p {
    position: relative;
    line-height: 2.4rem;
    font-size: 2.4rem;
    -webkit-font-smoothing: antialiased;
    margin-top: 2vh;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    transform: translate(0, 10rem);

    h3 {
      font-size: 5vw;
      line-height: 1.2;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.4;
      margin-top: 1vh;
    }
  }
`;
