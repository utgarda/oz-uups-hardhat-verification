const {ethers, upgrades} = require('hardhat');
const sleep = require('sleep');

async function main() {
    const Shmoken = await ethers.getContractFactory('TokenShmoken');
    const proxy = await upgrades.deployProxy(Shmoken, {kind: 'uups'});
    console.log("UUPS deployed: ", proxy.address);

    sleep.sleep(15);

    await hre.run("verify:verify", {
        address: proxy.address
    });
}

main();