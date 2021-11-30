import LiqudityReward from "../../../abi/LiqudityReward.json";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../../constants";
import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";
import { useEffect, useState } from "react";

const LPRewardInterface = new Interface(LiqudityReward);
const LPRewardContract = new Contract(LP_REWARD_ADDR, LPRewardInterface);

const useExit = () => {
  const { state, send } = useContractFunction(LPRewardContract, "exit", {
    transactionName: "exit",
  });
  const [isMining, setIsMining] = useState(false);
  const onClickExit = async ({ account }) => {
    if (account) {
      await send(account);
    }
  };
  useEffect(() => {
    if (state.status === "Mining") {
      setIsMining(true);
    } else {
      setIsMining(false);
    }
  }, [state.status]);
  return {
    isMining,
    onClickExit,
  };
};

export { useExit };
