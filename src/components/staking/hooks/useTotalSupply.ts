import { ERC20Interface, useContractCall } from "@usedapp/core";

import { Interface } from "@ethersproject/abi";
import { BigNumber } from "@ethersproject/bignumber";

export function useTotalSupply(address: string): BigNumber | undefined {
  const [supply] =
    useContractCall(
      address && {
        abi: ERC20Interface,
        address,
        method: "totalSupply",
        args: [],
      }
    ) ?? [];
  return supply;
}
