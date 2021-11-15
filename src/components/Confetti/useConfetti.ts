import { useCallback, useEffect, useState } from "react";

const useConfetti = ({ account }) => {
  const [isClaimClicked, setIsClaimClicked] = useState(false);
  const [isClaimSuccess, setIsClaimSuccess] = useState(false);
  const startConfetti = isClaimClicked && isClaimSuccess;

  const claimClickCallbackConfetti = useCallback(() => {
    setIsClaimClicked(true);
  }, []);

  const claimSuccessCallbackConfetti = useCallback(() => {
    setIsClaimSuccess(true);
  }, []);

  useEffect(() => {
    if (isClaimSuccess) {
      const t = setTimeout(() => {
        setIsClaimSuccess(false);
      }, 2000);

      return () => clearTimeout(t);
    }
  }, [isClaimSuccess]);

  // accountChange to reset state
  useEffect(() => {
    setIsClaimClicked(false);
    setIsClaimSuccess(false);
  }, [account]);

  return {
    claimClickCallbackConfetti,
    claimSuccessCallbackConfetti,
    startConfetti,
  };
};

export { useConfetti };
