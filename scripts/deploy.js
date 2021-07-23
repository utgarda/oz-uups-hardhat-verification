const {ethers, upgrades} = require('hardhat');

async function main() {
    const Shmoken = await ethers.getContractFactory('TokenShmoken');
    const proxy = await upgrades.deployProxy(Shmoken, {kind: 'uups'});
    console.log("UUPS deployed: ", proxy.address);
}

main();