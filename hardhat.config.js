require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-etherscan');

const INFURA_API_KEY = process.env.WEB3_INFURA_PROJECT_ID || "";
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY
const ETHERSCAN_TOKEN = process.env.ETHERSCAN_TOKEN;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.2",

    networks: {
        hardhat: {},
        localhost: {},
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [RINKEBY_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_TOKEN
    }
};
