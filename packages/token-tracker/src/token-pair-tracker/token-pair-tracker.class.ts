import { utilClasses, enums } from '@token-discovery/common';
import { logTokenPair } from './common/utils';

class TokenPairTracker {
	start() {
		const uniswapV2Factory = new utilClasses.UniswapV2Factory();
		uniswapV2Factory.trackPairCreated();

		utilClasses.pubSub.on(
			enums.PubSubEvent.NewTokenPairCreated,
			({ token0, token1, reserve0, reserve1, pairAddress }) => {
				logTokenPair({
					token0,
					token1,
					reserve0,
					reserve1,
					pairAddress,
				});
			},
		);
	}
}

export { TokenPairTracker };
