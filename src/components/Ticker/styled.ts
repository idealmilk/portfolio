import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker-wrap .ticker__item:before {
    content: '';
    height: 11px;
    width: 11px;
    display: inline-block;
    border-radius: 100%;
    position: relative;
    margin-right: 15px;
  }

  .ticker-wrap {
    position: relative;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    height: 20rem;
    padding-left: 100%;
    box-sizing: content-box;

    .ticker {
      display: inline-block;
      margin-top: 2rem;
      height: 20rem;
      line-height: 2.5rem;
      white-space: nowrap;
      padding-right: 100%;
      box-sizing: content-box;

      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: ticker;
      animation-name: ticker;
      -webkit-animation-duration: 80s;
      animation-duration: 80s;

      &__item {
        display: inline-block;
        padding: 0 8rem;
        font-size: 12rem;
        color: white;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    .ticker-wrap {
      height: 16rem;
      .ticker {
        height: 16rem;
        &__item {
          font-size: 8rem;
        }
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    .ticker-wrap {
      .ticker {
        &__item {
          font-size: 6rem;
        }
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    .ticker-wrap {
      height: 13rem;
      .ticker {
        height: 13rem;
        margin-bottom: 5rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    .ticker-wrap {
      height: 8rem;
      .ticker {
         {
          height: 8rem;
          &__item {
            padding: 0 2rem;
            font-size: 2.6rem;
          }
        }
      }
    }
  }
`;
