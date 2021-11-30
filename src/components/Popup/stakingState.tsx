import LiqudityReward from "../../abi/LiqudityReward.json";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const LPRewardInterface = new Interface(LiqudityReward);
const LPRewardContract = new Contract(LP_REWARD_ADDR, LPRewardInterface);

const useStake = () => {
  const { state, send } = useContractFunction(LPRewardContract, "stake", {
    transactionName: "Stake",
  });
  const [isMining, setIsMining] = useState(false);
  const onClickStake = async ({ account, amount }) => {
    if (account) {
      await send(account, amount);
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
    onClickStake,
  };
};

const StakingState = createContainer(useStake);

export { StakingState };
