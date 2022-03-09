import { useContractCall } from "@usedapp/core";
import LiqudityReward from "../../../abi/LiqudityReward.json";
import { LP_REWARD_ADDR } from "../../../../constants";
import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";

const LPRewardInterface = new Interface(LiqudityReward);

export function useRewardRate(): BigNumber | undefined {
  const [rate] =
    useContractCall({
      abi: LPRewardInterface,
      address: LP_REWARD_ADDR,
      method: "rewardRate",
      args: [],
    }) ?? [];
  return rate;
}
