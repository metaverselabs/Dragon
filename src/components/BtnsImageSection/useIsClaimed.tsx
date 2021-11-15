import userListJson from "../../utils/list.json";
import { useEffect, useState } from "react";
import { Provider } from "@ethersproject/providers";
import { useCallback } from "react";
import { useMerkleContract } from "./useMerkleContract";
import { useApiCheck } from "./api";

const useIsQualifiedClick = ({ isRealQualifed }) => {
  const [isQualifedOnce, setIsQualifedOnce] = useState(true);
  const OnClickQualified = useCallback(() => {
    setIsQualifedOnce(isRealQualifed);
    // const t = setTimeout(() => setIsQualifedOnce(true), 4000);
    // return () => clearTimeout(t);
  }, [isRealQualifed]);

  const reset = useCallback(() => {
    setIsQualifedOnce(true);
  }, []);

  return {
    isQualifedOnce,
    OnClickQualified,
    reset,
  };
};

interface useIsQualifedOrClaimedProps {
  provider: any;
  isRealQualifed: boolean;
  merkleData: null | Params;
  account: string
}
interface useIsQualifedOrClaimedReturnType {
  isClaimed: boolean;
  isQualifed: boolean;
  OnClickQualified: Function;
  resetIsQualifed: Function;
}

type Params = {
  index: number;
  amount: string;
  proof: string[];
};

export const useIsClaimed = ({
  provider,
  isRealQualifed,
  merkleData,
  account
}: useIsQualifedOrClaimedProps): useIsQualifedOrClaimedReturnType => {
  const [isClaimed, setIsClaimed] = useState<boolean>(false);
  const MerkleContract = useMerkleContract({ provider });

  console.log("useIsQualifedOrClaimed");

  // isClaimed
  useEffect(() => {
    if (isRealQualifed) {
      (async () => {
        const params = merkleData as Params;
        if (!!params) {
          const isClaimedState = await MerkleContract.isClaimed(params.index);
          setIsClaimed(isClaimedState);
        } else {
          // setIsClaimed(false);
        }
      })();
    } else {
      setIsClaimed(false)
    }
  }, [MerkleContract, isRealQualifed, merkleData, account]);

  const {
    OnClickQualified,
    isQualifedOnce,
    reset: resetIsQualifed,
  } = useIsQualifiedClick({
    isRealQualifed,
  });

  return {
    isClaimed,
    isQualifed: isQualifedOnce,
    OnClickQualified,
    resetIsQualifed,
  };
};
