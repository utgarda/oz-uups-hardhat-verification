This is a sample repo illustrating an attempt to verify UUPS proxy deployed as described  
in [OZ UUPS tutorial](https://forum.openzeppelin.com/t/uups-proxies-tutorial-solidity-javascript/7786)

### Test
```shell
npx hardhat test 

Shmoken Upgrade
Owner =  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Owner Balance in V1 =  1000000000000000000000
Owner Balance in V2 =  1000000000000000000000
New value existing only in V2 before being initialized =  0x0000000000000000000000000000000000000000
New value existing only in V2 after being initialized  =  0x1111111111111111111111111111111111111111
    ✓ deploys and upgrades (916ms)

  1 passing (919ms)
```

### Deploy to Rinkeby
```shell
npx hardhat run scripts/deploy.js --network rinkeby          
UUPS deployed:  0x48597923ca253F2e9965bc2a1185F8270b094CA0
```


#### First attempt to verify using @nomiclabs/hardhat-etherscan 
```shell
npx hardhat verify 0x48597923ca253F2e9965bc2a1185F8270b094CA0 --network rinkeby
Error in plugin @nomiclabs/hardhat-etherscan: The contract you want to verify was compiled with solidity 0.8.2, but your configured compiler version is: 0.8.3.
...
```

#### switched to 0.8.2 in hardhat.config.js

```shell
npx hardhat verify 0x48597923ca253F2e9965bc2a1185F8270b094CA0 --network rinkeby
Compiling 13 files with 0.8.2
Compilation finished successfully
Error in plugin @nomiclabs/hardhat-etherscan: The address provided as argument contains a contract, but its bytecode doesn't match any of your local contracts.

Possible causes are:
- Contract code changed after the deployment was executed. This includes code for seemingly unrelated contracts.
- A solidity file was added, moved, deleted or renamed after the deployment was executed. This includes files for seemingly unrelated contracts.
- Solidity compiler settings were modified after the deployment was executed (like the optimizer, target EVM, etc.).
- The given address is wrong.
- The selected network (rinkeby) is wrong.
```

#### trying to call verify from a deploy script
https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html#using-programmatically
```
npx hardhat run scripts/deploy_and_verify.js --network rinkeby

UUPS deployed:  0x30AcA980004b0b98f0b26cfF47DeB1924e1E43ee
Nothing to compile

uups_tutorial/node_modules/@nomiclabs/hardhat-etherscan/src/index.ts:512
throw new NomicLabsHardhatPluginError(pluginName, message);
^
NomicLabsHardhatPluginError: The address provided as argument contains a contract, but its bytecode doesn't match any of your local contracts.
```