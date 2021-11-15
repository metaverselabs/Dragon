import { useCallback, useState } from "react";

export const useToggle = (initbool) => {
  const [t, SetT] = useState(initbool);

  const toggle = useCallback((t) => {
    SetT(t);
  }, []);
  return {
    toggle,
    toggleState: t,
  };
};
