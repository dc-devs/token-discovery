import { ethers } from 'ethers';
import { IErc20 } from '@token-discovery/types';

interface ILogTokenPairOptions {
	token0: IErc20;
	token1: IErc20;
	pairAddress: string;
	reserve0: string;
	reserve1: string;
}

const logTokenPair = ({
	token0,
	token1,
	reserve0,
	reserve1,
	pairAddress,
}: ILogTokenPairOptions) => {
	console.log(`----------------------------------`);
	console.log(`Pair: ${pairAddress}`);
	console.log(``);
	console.log(`Token 0`);
	console.log(`Name: ${token0.name}`);
	console.log(`Symbol: ${token0.symbol}`);
	console.log(`Adddress: ${token0.address}`);
	console.log(`Total Supply: ${token0.totalSupply}`);
	console.log(`Liquidity: ${ethers.formatUnits(reserve0, 'ether')}`);
	console.log(``);
	console.log(`Token 1`);
	console.log(`Name: ${token1.name}`);
	console.log(`Symbol: $${token1.symbol}`);
	console.log(`Adddress: ${token1.address}`);
	console.log(`Total Supply: ${token1.totalSupply}`);
	console.log(`Liquidity: ${ethers.formatUnits(reserve1, 'ether')}`);
	console.log(``);
	console.log('Links:');
	console.log(
		'Dextools',
		`https://www.dextools.io/app/en/ether/pair-explorer/${pairAddress}`,
	);
	console.log(`----------------------------------`);
	console.log(``);
};

export { logTokenPair };
