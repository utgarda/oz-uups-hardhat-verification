const {ethers, upgrades} = require('hardhat');

describe('Shmoken Upgrade', function () {
    it('deploys and upgrades', async function () {
        const Shmoken = await ethers.getContractFactory('TokenShmoken');
        const proxy = await upgrades.deployProxy(Shmoken, {kind: 'uups'});

        const owner = await proxy.owner();
        console.log("Owner = ", owner);
        console.log("Owner Balance in V1 = ", (await proxy.balanceOf(owner)).toString());

        const V2 = await ethers.getContractFactory('ShmokenV2');
        const proxy2 = await upgrades.upgradeProxy(proxy, V2);

        console.log("Owner Balance in V2 = ", (await proxy2.balanceOf(owner)).toString());
        console.log("New value existing only in V2 before being initialized = ", await proxy2.getWhatever())
        await proxy2.setWhatever('0x1111111111111111111111111111111111111111');
        console.log("New value existing only in V2 after being initialized  = ", await proxy2.getWhatever())
    });
});

