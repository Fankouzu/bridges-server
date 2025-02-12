import { ethers } from "ethers";

type EventKeys = "blockNumber" | "txHash" | "from" | "to" | "token" | "amount";

export type EventData = {
    blockNumber: number;
    txHash: string;
    from: string;
    to: string;
    token: string;
    amount: ethers.BigNumber;
    isDeposit: boolean;
    chainOverride?: string  // used to insert tx using bridgeID from same bridgeNetwork but a different chain
  };

export type EventKeyMapping = {
    [key in EventKeys]?: string;
  };

export type RecordedBlocks = {
  [adapterDbNameChain: string]: {
    startBlock: number;
    endBlock: number;
  };
};