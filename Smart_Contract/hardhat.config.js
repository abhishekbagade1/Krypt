require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

//  0xBbA02ca07173e338af3Df30700CE211EEF87b6C4