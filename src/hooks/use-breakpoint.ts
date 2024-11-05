import { useMediaQuery } from '@/hooks/use-media-query';

const breakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const useBreakpoint = (breakpoint: keyof typeof breakpointMap) => {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
};

export { useBreakpoint };
