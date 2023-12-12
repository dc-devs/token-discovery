import { ethers } from 'ethers';
import { utilClasses } from '@token-discovery/common';

interface ILogTokenPairOptions {
	token0: utilClasses.UniswapV2Erc20;
	token1: utilClasses.UniswapV2Erc20;
	pairAddress: string;
	reserve0: string;
	reserve1: string;
}

class TokenPairReporter {
	logTokenPair({
		token0,
		token1,
		reserve0,
		reserve1,
		pairAddress,
	}: ILogTokenPairOptions) {
		console.log(`----------------------------------`);
		console.log(`Pair: ${pairAddress}`);
		console.log(``);
		console.log(`Token 0`);
		console.log(`Name: ${token0.name}`);
		console.log(`Symbol: ${token0.symbol}`);
		console.log(`Adddress: ${token0.address}`);
		console.log(`Liquidity: ${ethers.formatUnits(reserve0, 'ether')}`);
		console.log(``);
		console.log(`Token 1`);
		console.log(`Name: ${token1.name}`);
		console.log(`Symbol: $${token1.symbol}`);
		console.log(`Adddress: ${token1.address}`);
		console.log(`Liquidity: ${ethers.formatUnits(reserve1, 'ether')}`);
		console.log(``);
		console.log('Links:');
		console.log(
			'Dextools',
			`https://www.dextools.io/app/en/ether/pair-explorer/${pairAddress}`,
		);
		console.log(`----------------------------------`);
		console.log(``);
	}
}

export { TokenPairReporter };