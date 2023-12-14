import { logTokenPair } from './common/utils';
import { IErc20 } from '@token-discovery/types';
import { PubSub } from '@token-discovery/pub-sub';
import { UniswapV2Factory } from '@token-discovery/uniswap';

class TokenPairTracker {
	pubSub: PubSub;

	constructor({ pubSub }: { pubSub: PubSub }) {
		this.pubSub = pubSub;
	}

	start() {
		const uniswapV2Factory = new UniswapV2Factory({
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
		token0: IErc20;
		token1: IErc20;
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
