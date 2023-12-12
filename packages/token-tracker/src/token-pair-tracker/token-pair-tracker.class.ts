import { utilClasses } from '@token-discovery/common';

class TokenPairTracker {
	start() {
		const { UniswapV2Factory } = utilClasses;
		const uniswapV2Factory = new UniswapV2Factory();
		uniswapV2Factory.trackPairCreated();
	}
}

export { TokenPairTracker };
