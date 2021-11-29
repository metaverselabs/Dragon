import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../../constants";
import { useEthers, useTokenBalance, useTokenAllowance } from "@usedapp/core";
import { useEffect, useState } from "react";

export const useApproved = () => {
  const { account, library } = useEthers();
  const [approved, setApproved] = useState(false);
  const LPTokenBalance = useTokenBalance(LPV2_ADDR, account);
  const allowanceLP = useTokenAllowance(LPV2_ADDR, account, LP_REWARD_ADDR);

  useEffect(() => {
    if (allowanceLP > LPTokenBalance) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [LPTokenBalance, allowanceLP]);

  return { approved };
};
