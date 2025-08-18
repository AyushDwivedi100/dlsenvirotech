import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface ResponsiveTimelineProps {
  milestones: Milestone[];
}

const ResponsiveTimeline: React.FC<ResponsiveTimelineProps> = ({
  milestones,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!containerRef.current || !maskRef.current) return;

    const container = containerRef.current;
    const sections = gsap.utils.toArray<HTMLElement>(".container section");
    const texts = gsap.utils.toArray<HTMLElement>(".anim");
    const mask = maskRef.current;

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth * (sections.length - 1)}`,
        snap: 1 / (sections.length - 1),
        markers: true,
      },
    });

    // Progress bar animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: container.parentElement,
        start: "top left",
        scrub: 1,
      },
    });

    // Animate texts
    sections.forEach((section: HTMLElement) => {
      const text = section.querySelectorAll<HTMLElement>(".anim");
      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          // markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st: ScrollTrigger) => st.kill());
      scrollTween.kill();
    };
  }, []);

  return (
    <div className="wrapper overflow-x-hidden relative">
      <div
        className="container scrollx flex"
        style={{ width: `${milestones.length * 85}vw` }}
        ref={containerRef}
      >
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{ top: "12em", left: "10vw", width: "50vw" }}
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#D9D9D9"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={900}
            height={10}
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect
              className="mask"
              y={-49}
              height={99}
              fill="black"
              ref={maskRef}
              style={{ width: 0 }}
            />
          </g>
        </svg>

        {milestones.map((milestone, index) => (
          <section
            key={milestone.year}
            className="pin w-[85vw] p-[20vw_10vw] h-screen flex-shrink-0"
          >
            <span className={index > 0 ? "anim" : undefined}>Advanced</span>
            <h1
              className={
                index > 0
                  ? "anim text-6xl font-playfair-display"
                  : "text-6xl font-playfair-display"
              }
            >
              {milestone.title}
            </h1>

            <div
              className={index > 0 ? "col anim flex gap-12" : "col flex gap-12"}
            >
              <p className="text-sm max-w-[50vw]">{milestone.description}</p>
            </div>
          </section>
        ))}
      </div>
      <section style={{ backgroundColor: "lightblue" }}></section>
    </div>
  );
};

export default ResponsiveTimeline;
