import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { Box } from "@mui/material";
import { useRef, useLayoutEffect, useState, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode; // Content to be scrolled
  baseVelocity?: number; // Speed of the marquee
  direction?: "left" | "right"; // Optional fixed direction
  scrollContainerRef?: React.RefObject<HTMLElement>; // Optional scroll container
  damping?: number; // Spring damping
  stiffness?: number; // Spring stiffness
  numCopies?: number; // Number of copies for seamless looping
  style?: React.CSSProperties; // Custom styles for the content
};

function useElementWidth(ref: React.RefObject<HTMLElement>): number {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

const Marquee = ({
  children,
  baseVelocity = 100,
  direction, // New prop for fixed direction
  scrollContainerRef,
  damping = 50,
  stiffness = 400,
  numCopies = 5,
  style,
}: MarqueeProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll(scrollContainerRef ? { container: scrollContainerRef } : {});
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const copyWidth = useElementWidth(containerRef as React.RefObject<HTMLElement>);

  const x = useTransform(baseX, (v) => {
    if (!copyWidth) return "0px";
    const wrapped = ((v % copyWidth) + copyWidth) % copyWidth;
    return `${-wrapped}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((_t, delta) => {
    if (!copyWidth) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // If direction is specified, fix the direction; otherwise, use scroll-based direction
    if (direction) {
      directionFactor.current = direction === "left" ? 1 : -1; // Left: positive, Right: negative
    } else if (velocityFactor.get() < 0) {
      directionFactor.current = -1; // Default behavior: scroll up
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1; // Default behavior: scroll down
    }

    moveBy += directionFactor.current * moveBy * (direction ? 0 : velocityFactor.get()); // Disable velocity factor if direction is fixed
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <motion.div style={{ x, display: "flex", whiteSpace: "nowrap" }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <Box
            key={i}
            ref={i === 0 ? containerRef : null}
            sx={{ display: "flex", gap: 1, pr: 1 }}
            style={style}
          >
            {children}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default Marquee;