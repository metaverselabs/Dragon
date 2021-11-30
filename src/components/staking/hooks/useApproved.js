import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../../constants";
import { useEthers, useTokenBalance, useTokenAllowance } from "@usedapp/core";
import { useEffect, useState } from "react";

export const useApproved = () => {
  const { account, library } = useEthers();
  const [approved, setApproved] = useState(false);
  const lpTokenBalance = useTokenBalance(LPV2_ADDR, account);
  const allowanceLP = useTokenAllowance(LPV2_ADDR, account, LP_REWARD_ADDR);
  // console.log("allowanceLP > lpTokenBalance", allowanceLP > lpTokenBalance);
  // console.log("allowanceLP", allowanceLP.toString());
  // console.log("lpTokenBalance", lpTokenBalance.toString());
  // console.log("allowanceLP.lt(lpTokenBalance)", allowanceLP.gt(lpTokenBalance));

  useEffect(() => {
    if (allowanceLP && allowanceLP.gt(lpTokenBalance)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [lpTokenBalance, allowanceLP]);

  return { approved, lpTokenBalance, allowanceLP };
};
