import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { Button } from "../Button";
import { useApproved } from "./hooks/useApproved";
import { useContractFunction } from "@usedapp/core";
import UniswapV2Pair from "../../abi/UniswapV2Pair.json";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { useEffect, useState } from "react";
import { MaxUint256 } from "@ethersproject/constants";
import { useEthers } from "@usedapp/core";
// import { useV2Contract } from "./hooks/useV2Contract";

const LPInterface = new Interface(UniswapV2Pair);
const v2Contract = new Contract(LPV2_ADDR, LPInterface);

export const AprroveBtn = () => {
  const { account } = useEthers();
  const { resH, resW } = useResponsiveSize();
  const { state, send } = useContractFunction(v2Contract, "approve", {
    transactionName: "Approve",
  });
  const [isMining, setIsMining] = useState(false);
  const onClick = async () => {
    await send(LP_REWARD_ADDR, MaxUint256.toString());
  };
  useEffect(() => {
    if (state.status === "Mining") {
      setIsMining(true);
    } else {
      setIsMining(false);
    }
  }, [state.status]);
  const disabled = !account || isMining;
  const btnText = isMining ? "Approving..." : "Approve Staking";

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      btnStyleCss={css`
        transition: transform 0.5s;
        min-width: ${resW(290)}px;
        height: ${resH(44)}px;
        background: #2d2d2d;
        border-radius: 36px;
        color: ${disabled ? "white" : "#e57d44"};
      `}
    >
      {btnText}
    </Button>
  );
};
