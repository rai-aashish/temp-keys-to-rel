import { useMediaQuery } from '@/hooks/use-media-query';

const breakpointMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type TOptions = {
  matchedCallback?: () => void;
  unMatchedCallback?: () => void;
};

const useBreakpoint = (breakpoint: keyof typeof breakpointMap, options?: TOptions) => {
  const bp = breakpointMap[breakpoint];
  return useMediaQuery(`(min-width: ${bp}px)`, {
    ...options,
  });
};

export { useBreakpoint };
