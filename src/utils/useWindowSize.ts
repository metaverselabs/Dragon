import { useState, useEffect, useCallback } from "react";

interface initVal {
  initWidth: number;
  initHeight: number;
}

const useWindowSize = (
  { initWidth, initHeight }: initVal = {
    initWidth: window.innerWidth,
    initHeight: window.innerHeight,
  }
) => {
  const [{ winHeight, winWidth }, setWindowSize] = useState({
    winWidth: initWidth,
    winHeight: initHeight,
  });

  const changeWindowSize = useCallback(() => {
    setWindowSize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [changeWindowSize]);

  return { winWidth, winHeight };
};

export { useWindowSize };
