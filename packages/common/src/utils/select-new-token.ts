import { UniswapV2Erc20 } from '../util-classes';

enum Symbol {
	WETH = 'WETH',
}

interface IOptions {
	token0: UniswapV2Erc20;
	token1: UniswapV2Erc20;
}

const selectNewToken = ({ token0, token1 }: IOptions) => {
	let newToken = token0;

	if (token0.symbol === Symbol.WETH) {
		newToken = token1;
	}

	return newToken;
};

export { selectNewToken };
