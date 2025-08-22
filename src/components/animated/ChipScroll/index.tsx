import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { Box, Chip, SxProps, Theme } from "@mui/material";
import React, { useRef, useLayoutEffect, useState, ReactElement } from "react";

type ChipType = {
  label: string;
  icon: ReactElement;
};

type ChipScrollProps = {
  chips: ChipType[];
  baseVelocity?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  chipStyle?: SxProps<Theme>;
  iconStyle?: React.CSSProperties;
  gap?: number;
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

const ChipScroll = ({
  chips = [],
  baseVelocity = 100,
  scrollContainerRef,
  damping = 50,
  stiffness = 400,
  numCopies = 5,
  chipStyle,
  iconStyle,
  gap = 1
}: ChipScrollProps) => {
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
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Box sx={{ overflow: 'hidden', width: '100%', py: 2 }}>
      <motion.div style={{ x, display: 'flex', whiteSpace: 'nowrap' }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <Box
            key={i}
            ref={i === 0 ? containerRef : null}
            sx={{ display: 'flex', gap, pr: gap }}
          >
            {chips.map((chip, index) => (
              <Chip
                key={`${i}-${index}`}
                label={chip.label}
                icon={React.cloneElement(chip.icon, {
                  style: {
                    fontSize: '1rem',
                    width: '1em',
                    height: '1em',
                    // marginRight: '2px',
                    ...iconStyle
                  }
                } as React.HTMLAttributes<HTMLElement>)}
                sx={{
                  flexShrink: 0,
                  borderRadius: '8px',
                  '& .MuiChip-icon': {
                    color: 'inherit',
                    marginLeft: '8px',
                    marginRight: '-4px'
                  },
                  '& .MuiChip-label': {
                    paddingRight: '12px'
                  },
                  ...chipStyle
                }}
              />
            ))}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default ChipScroll;