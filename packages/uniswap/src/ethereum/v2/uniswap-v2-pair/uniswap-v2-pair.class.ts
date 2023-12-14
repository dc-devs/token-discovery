import { UniswapV2PairAbi } from '../abis';
import { ethers as ethersJs } from 'ethers';
import { ethers } from '@token-discovery/ethers';

interface IConstructorOptions {
	address: string;
}

class UniswapV2Pair {
	abi: string[];
	address: string;
	contract: ethersJs.Contract;

	constructor({ address }: IConstructorOptions) {
		const abi = UniswapV2PairAbi;

		this.abi = abi;
		this.address = address;
		this.contract = ethers.contract({
			abi,
			address,
		});

		return this;
	}

	async init() {
		return this;
	}
}

export { UniswapV2Pair };
