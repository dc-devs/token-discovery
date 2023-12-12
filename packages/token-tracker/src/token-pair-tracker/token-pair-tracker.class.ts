import { logTokenPair } from './common/utils';
import { utilClasses } from '@token-discovery/common';

class TokenPairTracker {
	pubSub: utilClasses.PubSub;

	constructor({ pubSub }: { pubSub: utilClasses.PubSub }) {
		this.pubSub = pubSub;
	}

	start() {
		const uniswapV2Factory = new utilClasses.UniswapV2Factory({
			pubSub: this.pubSub,
		});

		uniswapV2Factory.trackPairCreated();
	}

	logTokenPair({
		token0,
		token1,
		reserve0,
		reserve1,
		pairAddress,
	}: {
		token0: utilClasses.UniswapV2Erc20;
		token1: utilClasses.UniswapV2Erc20;
		reserve0: string;
		reserve1: string;
		pairAddress: string;
	}) {
		logTokenPair({
			token0,
			token1,
			reserve0,
			reserve1,
			pairAddress,
		});
	}
}

export { TokenPairTracker };
