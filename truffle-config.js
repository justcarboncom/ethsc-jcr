const { endpoint, privateKey, etherscanAPIKey} = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  plugins: ['truffle-plugin-verify'],

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    live: {
      provider: () => new HDWalletProvider(privateKey, endpoint),
      network_id: 1
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  },

  api_keys: {
    etherscan: etherscanAPIKey
  }
};
