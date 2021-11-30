import { useContractCall } from "@usedapp/core";
import LiqudityReward from "../../../abi/LiqudityReward.json";
import { LP_REWARD_ADDR } from "../../../../constants";
import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";

const LPRewardInterface = new Interface(LiqudityReward);

export function useEarned({ account }): BigNumber | undefined {
  const [earned] =
    useContractCall(
      account && {
        abi: LPRewardInterface,
        address: LP_REWARD_ADDR,
        method: "earned",
        args: [account],
      }
    ) ?? [];
  return earned;
}
