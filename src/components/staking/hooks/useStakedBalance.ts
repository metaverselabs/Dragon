import { useContractCall } from "@usedapp/core";
import LiqudityReward from "../../../abi/LiqudityReward.json";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../../constants";
import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";

const LPRewardInterface = new Interface(LiqudityReward);

export function useStakedBalance({ account }): BigNumber | undefined {
  const [stakedBalance] =
    useContractCall(
      account && {
        abi: LPRewardInterface,
        address: LP_REWARD_ADDR,
        method: "balanceOf",
        args: [account],
      }
    ) ?? [];
  return stakedBalance;
}
