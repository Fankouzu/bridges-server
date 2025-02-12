import { BridgeAdapter } from "../helpers/bridgeAdapter.type";
import polygon from "./polygon";
import synapse from "./synapse";
import hop from "./hop";
import arbitrum from "./arbitrum";
import avalanche from "./avalanche";
import optimism from "./optimism";
import multichain from "./multichain";
import celer from "./celer";
import polynetwork from "./polynetwork";
import orbitbridge from "./orbitbridge";
import chainport from "./chainport";
import stargate from "./stargate";
import portal from "./portal";
import binancepeg from "./binancepeg";
import xdai from "./xdai";
import avalanchebtc from "./avalanche-btc";
import axelar from "./axelar";
import rainbowbridge from "./rainbowbridge";
import across from "./across";
import debridge from "./debridge";
import optics from "./optics"
import allbridge from "./allbridge"

export default {
  polygon,
  synapse,
  hop,
  arbitrum,
  avalanche,
  optimism,
  multichain,
  celer,
  polynetwork,
  orbitbridge,
  chainport,
  stargate,
  portal,
  binancepeg,
  xdai,
  "avalanche-btc": avalanchebtc,
  axelar,
  rainbowbridge,
  across,
  debridge,
  optics,
  allbridge
} as {
  [bridge: string]: BridgeAdapter;
};
