import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {PRIVATE_KEY} from './keyconfig';

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: `https://endpoints.omniatech.io/v1/eth/holesky/public`,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
