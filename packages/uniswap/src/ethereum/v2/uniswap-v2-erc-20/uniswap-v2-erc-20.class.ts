import { UniswapV2Erc20Abi } from '../abis';
import { ethers as ethersJs } from 'ethers';
import { ethers } from '@token-discovery/ethers';

interface IConstructorOptions {
	address: string;
}

class UniswapV2Erc20 {
	abi: any[];
	address: string;
	name?: string;
	symbol?: string;
	decimals?: string;
	totalSupply?: string;
	contract: ethersJs.Contract;

	constructor({ address }: IConstructorOptions) {
		const abi = UniswapV2Erc20Abi;

		this.abi = abi;

		this.address = address.toLowerCase();

		this.contract = ethers.contract({
			abi,
			address,
		});

		return this;
	}

	async init() {
		const name = await this.contract.name();
		const symbol = await this.contract.symbol();
		const decimals = await this.contract.decimals();
		const totalSupply = await this.contract.totalSupply();

		this.name = name.trim();
		this.symbol = symbol.trim();
		this.decimals = decimals.toString();
		this.totalSupply = totalSupply.toString();

		return this;
	}
}

export { UniswapV2Erc20 };
