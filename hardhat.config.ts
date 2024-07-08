import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { PRIVATE_KEY, PRIVATE_KEY2 } from './keyconfig';

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: `https://endpoints.omniatech.io/v1/eth/holesky/public`,
      accounts: [PRIVATE_KEY, PRIVATE_KEY2],
    },
  },
};

export default config;
