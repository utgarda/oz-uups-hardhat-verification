// SPDX-License-Identifier: MITpragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol"; 

contract ShmokenV2 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {

	address public whatever;

	function initialize(address whatever_) initializer public {      
		//__ERC20_init("TokenShmoken V2", "SHMK2");      
		//_mint(msg.sender, 1000 * 10 ** decimals());
		whatever = whatever_;
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}

	function setWhatever(address whatever_) external onlyOwner {
		whatever = whatever_;
	}

	function getWhatever() external view returns (address){
		return whatever;
	}
}
