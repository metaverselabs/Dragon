import { useMerkleContract } from "./useMerkleContract";
import userListJson from "../../utils/list.json";
import { useCallback, useEffect, useState } from "react";

type Params = {
  index: number;
  amount: string;
  proof: string[];
};

type statusTxtType = "None" | "Success" | "Fail" | "Mining";

export const useClaim = ({
  provider,
  account,
  isRealQualifed,
  merkleData,
  isClaimed,
  toggle,
  toggleState,
  claimSuccessCallbackConfetti,
}) => {
  const MerkleContract = useMerkleContract({ provider });
  const [status, setStatus] = useState(-1);
  const [statusTxt, setStatusTxt] = useState<statusTxtType>("None");

  console.log("useClaim");

  useEffect(() => {
    if (status == 1) {
      setStatusTxt("Success");
      claimSuccessCallbackConfetti();
    } else if (status == 0) {
      setStatusTxt("Fail");
    } else if (status == -2) {
      setStatusTxt("Mining");
    }
  }, [claimSuccessCallbackConfetti, status]);

  useEffect(() => {
    (async () => {
      if (account && isRealQualifed && !isClaimed && toggleState) {
        toggle(false);
        const params = merkleData;
        if (!!params) {
          try {
            const ctx = await MerkleContract.claim(
              params.index,
              account,
              params.amount,
              params.proof
            );
            setStatus(-2);
            const receipt = await ctx.wait();
            setStatus(receipt.status);
          } catch (e) {
            setStatus(-1);
            console.warn(e);
          }
        }
      }
    })();
  }, [
    MerkleContract,
    account,
    isClaimed,
    isRealQualifed,
    merkleData,
    toggle,
    toggleState,
  ]);

  return { status, statusTxt };
};
