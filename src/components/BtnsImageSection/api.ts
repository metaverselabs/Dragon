import { MutableRefObject, useCallback, useEffect, useState } from "react";
import { API_CHECK } from "../../../constants";
import useOnlineStatus from "@rehooks/online-status";
import { useFirebaseContainer } from "../../utils/useFirebaseContainer";
import { HttpsCallable } from "@firebase/functions";

type paramsType = {
  account: string;
};
type Params = {
  index: number;
  amount: string;
  proof: string[];
};

type processParamsType = {
    checkApiRef: MutableRefObject<HttpsCallable<any, any>> ;
  setLoadingApi: any;
  setApiTxt: any;
  account: any;
  setIsRealQualified: any;
  setMerkleData: any;
  isOnlineStatus: any;
};

let apiCounter = 0;

// const apiCheck = async ({ account }: paramsType) => {
//   console.log("apiCheck", ++apiCounter);
//   return fetch(API_CHECK, {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ account }),
//   });
// };

async function process({
    checkApiRef,
  setLoadingApi,
  setApiTxt,
  account,
  setIsRealQualified,
  setMerkleData,
  isOnlineStatus,
}: processParamsType) {
  if (!checkApiRef || !checkApiRef.current) return;
  const checkApi = checkApiRef.current
  try {
    if (!isOnlineStatus) {
      setLoadingApi(false);
      setApiTxt("NetWork Disconnected");
      return;
    }
    setLoadingApi(true);
    setApiTxt("");

    const {
      data: { qualified, address, merkleData },
    } = await checkApi ({
      account,
    });
    console.log("api account", address);
    setLoadingApi(false);
    setApiTxt("");
    setIsRealQualified(qualified);
    setMerkleData(merkleData);
  } catch (e) {
    setLoadingApi(true);
    setApiTxt("");
    setMerkleData(null);
    console.warn("useApiCheck", e);
  }
}

const useApiCheck = ({ account }) => {
  const [isRealQualifed, setIsRealQualified] = useState(false);
  const [merkleData, setMerkleData] = useState<null | Params>(null);
  const [loadingApi, setLoadingApi] = useState(false);
  const [apiErrTxt, setApiTxt] = useState("");
  const isOnlineStatus = useOnlineStatus();

  const { checkApiRef } = useFirebaseContainer();
  //   const [isApiLoaded, setIsApiLoaded] = useState(false)

  const resendApi = useCallback(() => {
    process({
        checkApiRef,
      setLoadingApi,
      setApiTxt,
      account,
      setIsRealQualified,
      setMerkleData,
      isOnlineStatus,
    });
  }, [account, checkApiRef, isOnlineStatus]);

  useEffect(() => {
    console.log("useApiCheck counter", apiCounter++);
    if (!account) return;
    process({
        checkApiRef,
      setLoadingApi,
      setApiTxt,
      account,
      setIsRealQualified,
      setMerkleData,
      isOnlineStatus,
    });
  }, [account, checkApiRef, isOnlineStatus]);

  console.log("merkleData", merkleData);
  console.log("isRealQualifed", isRealQualifed);
  return {
    isRealQualifed,
    merkleData,
    loadingApi,
    apiErrTxt,
    resendApi,
  };
};

export { useApiCheck };
