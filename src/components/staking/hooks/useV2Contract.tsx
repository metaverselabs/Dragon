import { useMemo } from "react";
import { UniswapV2Pair__factory } from "../../../contracts/factories/UniswapV2Pair__factory";
import { LPV2_ADDR } from "../../../../constants";

export const useV2Contract = ({ provider }) => {
  const UniswapV2PairContract = useMemo(() => {
    if (!provider) return null;
    return UniswapV2Pair__factory.connect(LPV2_ADDR, provider);
  }, [provider]);
  return UniswapV2PairContract;
};
