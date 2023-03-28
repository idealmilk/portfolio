import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start: boolean) {
  useEffect(() => {
    if (!start) return;

    let locoScroll: LocomotiveScroll | null = null;

    const scrollEl = document.querySelector<HTMLElement>("#main-container");

    console.log(scrollEl);

    if (scrollEl) {
      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });
    }
  }, [start]);
}
