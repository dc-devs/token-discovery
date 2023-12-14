import { ethers } from 'ethers';

interface IErc20 {
	abi: any[];
	address: string;
	name?: string;
	symbol?: string;
	contract: ethers.Contract;
}

export { IErc20 };
