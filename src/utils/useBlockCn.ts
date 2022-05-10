import { useEffect, useState } from "react";

type ResType = {
  block: boolean | undefined;
};

const blockcnapi = async () => {
  try {
    const res = await fetch(
      "https://us-central1-block-cn-ip.cloudfunctions.net/blockcn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resjson: ResType = await res.json();
    return false;
  } catch (e) {
    return true;
  }
};

export const useBlockCn = () => {
  const [isBlock, setIsBlock] = useState(true);
  useEffect(() => {
    blockcnapi().then((toblock) => {
      setIsBlock(toblock);
    });
  }, []);
  return {
    isBlock,
  };
};
