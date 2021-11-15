import { useWindowSize } from "./useWindowSize";
import memoize from "lodash.memoize";
import { useMemo, useState } from "react";

const DESIGN_WIDTH: number = 1920;
const DESIGN_HEIGHT: number = 1080;

// write code according to the figma design
const responsiveHeight = memoize((winHeight: number) => {
  return memoize(
    (size: number, designHight: number = DESIGN_HEIGHT) =>
      (size / designHight) * winHeight
  );
});

const responsiveWidth = memoize((winWidth: number) => {
  return memoize(
    (size: number, designWidth: number = DESIGN_WIDTH) =>
      (size / designWidth) * winWidth
  );
});

function useResponsiveSize() {
  const [isPortrait, setisProtrait] = useState(false);

  const { winHeight, winWidth } = useWindowSize({
    initWidth: window.innerWidth,
    initHeight: window.innerHeight,
  });
  useMemo(() => {
    if (winHeight > winWidth) {
      setisProtrait(true);
    } else {
      setisProtrait(false);
    }
  }, [winHeight, winWidth]);
  const resH = responsiveHeight(winHeight);
  const resW = responsiveWidth(winWidth);
  return { resH, resW, isPortrait };
}

export { useResponsiveSize };
