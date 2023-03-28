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
    .item-wrap {
    }
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
    background: ${(props) => props.theme.colors[props.background]};
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
  }

  .item-image {
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 100%;
    height: 100%;
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

  h4 {
    position: relative;
    line-height: 6vw;
    color: transparent;
    font-size: 6vw;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke: 2px #dbd8d6;
  }

  p {
    position: relative;
    line-height: 24px;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    margin-top: 2vh;
  }
`;
