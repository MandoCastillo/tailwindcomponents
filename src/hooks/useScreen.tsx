import { useRef } from 'react';

export enum Breakpoints {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

export const useScreen = () => {
  const width = useRef(window.innerWidth).current;
  const height = useRef(window.innerHeight).current;
  let isMobile = width < 1024
  let breakpoint: Breakpoints;
  if (width >= 0 && width < 640) {
    breakpoint = Breakpoints.sm;
  } else if (width >= 640 && width < 768) {
    breakpoint = Breakpoints.md;
  } else if (width >= 768 && width < 1024) {
    breakpoint = Breakpoints.lg;
  } else if (width >= 1024 && width < 1536) {
    breakpoint = Breakpoints.xl;
  } else {
    breakpoint = Breakpoints['2xl'];
  }

  return { width, height, breakpoint, isMobile };
};
