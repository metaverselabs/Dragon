import { useReverseENSLookUp } from "./useReverseENSLookUp";
import { useEthers } from "@usedapp/core";
import { useMemo } from "react";

const shortenName = (address: string) =>
  address && [address.substr(0, 4), address.substr(38, 4)].join("...");
//
const useShortAddressWithEns = (address: string) => {
  const ens = useReverseENSLookUp(address);
  const shortAddress = useMemo(
    () => shortenName(ens ? ens : address),
    [address, ens]
  );
  return shortAddress;
};

export { useShortAddressWithEns };
