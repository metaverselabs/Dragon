import { ChainId, Config, DAppProvider } from "@usedapp/core";

const isDev =  `${process.env.NEXT_PUBLIC_MODE}` === 'DEV'

export const config = isDev ?  {
  [ChainId.Ropsten]: {
    jsonRpcUri: `${process.env.NEXT_PUBLIC_JSON_RPC_URL}`,
    wsRpcUri: `${process.env.NEXT_PUBLIC_WS_RPC_URL}`,
  },
  // [ChainId.Mainnet]: {
  //   jsonRpcUri:
  //     "https://eth-mainnet.alchemyapi.io/v2/xQgsSdf3_x4Jd7490_yXjw6Z1I_VjwTu",
  //   wsRpcUri:
  //     "wss://eth-mainnet.alchemyapi.io/v2/xQgsSdf3_x4Jd7490_yXjw6Z1I_VjwTu",
  // },
} : {
  [ChainId.Mainnet]: {
    jsonRpcUri: `${process.env.NEXT_PUBLIC_JSON_RPC_URL}`,
    wsRpcUri: `${process.env.NEXT_PUBLIC_WS_RPC_URL}`,
  },
};

export const TOKEN_ADDR = `${process.env.NEXT_PUBLIC_TOKEN}`;
export const MERKLE_ADDR = `${process.env.NEXT_PUBLIC_MERKLE}`;
export const API_CHECK = `${process.env.NEXT_PUBLIC_API}`;

export const CHAIN = isDev?  ChainId.Ropsten : ChainId.Mainnet;

export const useDappConfig = {
  // readOnlyChainId: CHAIN,
  // supportedChains: [ChainId.Mainnet, ChainId.Ropsten],
  // supportedChains: [ChainId.Ropsten],
  readOnlyUrls: {
    [CHAIN]: config[CHAIN].jsonRpcUri,
  },
};

export const API_END_POINT_NAME = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
