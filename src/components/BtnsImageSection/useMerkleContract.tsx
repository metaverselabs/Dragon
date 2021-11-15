import { useMemo } from "react";
import { MerkleDistributor__factory } from "../../contracts/factories/MerkleDistributor__factory";
import { MERKLE_ADDR } from "../../../constants";

export const useMerkleContract = ({ provider }) => {
  const MerkleContract = useMemo(
    () => MerkleDistributor__factory.connect(MERKLE_ADDR, provider),
    [provider]
  );
  return MerkleContract;
};
