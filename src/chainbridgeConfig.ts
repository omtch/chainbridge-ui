import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";
import IconBSC from "./assets/icon_bsc.svg";
import IconOmega from "./assets/icon_omega_swap.svg";
import IconOmegaCoin from "./assets/icon_omega_explorer.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  chainIcon: string;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  chains: [
    {
      chainId: 0,
      networkId: 816,
      name: "OMN - testnet",
      bridgeAddress: "0x217c2412428FB0ffF2C0B9a8A8eB5c0B348bA4aA",
      erc20HandlerAddress: "0x791E491B418949456b7A614980Dd7bd0E9B2aBE3",
      rpcUrl: "https://test-rpc.omtch.com",
      type: "Ethereum",
      blockExplorer: "https://test-explorer.omtch.com",
      nativeTokenSymbol: "OMN",
      tokens: [
        {
          address: "0x01bDCf41Db44c1F92AcBbd016F56c1593aAb1258",
          name: "Wrapped OMN",
          symbol: "wOMN",
          imageUri: IconOmegaCoin,
          resourceId:
            "0x00000000000000000000000001bDCf41Db44c1F92AcBbd016F56c1593aAb1258",
          isNativeWrappedToken: true,
        },
      ],
      chainIcon: IconOmegaCoin,
    },
    {
      chainId: 1,
      networkId: 97,
      name: "BSC - testnet",
      bridgeAddress: "0x3b4fA0A8a4C31daA86F6eD049BB201E2A4449C98",
      erc20HandlerAddress: "0xC3c32d30DAc5B80a0dF9712FeC9604BAB2f12D1b",
      rpcUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
      type: "Ethereum",
      blockExplorer: "https://testnet.bscscan.com",
      nativeTokenSymbol: "BNB",
      tokens: [
        {
          address: "0x23A9FD05ef0c5fb9dDE964C4d4191A169Fd221f8",
          name: "Wrapped OMN",
          symbol: "wOMN",
          imageUri: IconOmegaCoin,
          resourceId:
            "0x000000000000000000000023A9FD05ef0c5fb9dDE964C4d4191A169Fd221f802",
        },
      ],
      chainIcon: IconBSC,
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};

export const chainBridgeOMNToken = {
  address: "0x0000000000000000000000000000000000000001",
  name: "OMN",
  symbol: "OMN",
  imageUri: IconOmegaCoin,
  resourceId: "",
};
