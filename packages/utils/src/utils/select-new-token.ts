import { IErc20 } from '@token-discovery/types';

enum Symbol {
	WETH = 'WETH',
}

interface IOptions {
	token0: IErc20;
	token1: IErc20;
}

const selectNewToken = ({ token0, token1 }: IOptions) => {
	let newToken = token0;

	if (token0.symbol === Symbol.WETH) {
		newToken = token1;
	}

	return newToken;
};

export { selectNewToken };
