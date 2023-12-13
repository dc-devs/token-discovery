import { enums, utilClasses } from '@token-discovery/common';
import { TokenPairTracker } from '@token-discovery/token-tracker';

const pubSub = new utilClasses.PubSub();
const tokenPairTracker = new TokenPairTracker({ pubSub });

tokenPairTracker.start();

tokenPairTracker.pubSub.on(
	enums.PubSubEvent.NewTokenPairCreated,
	({ token0, token1, reserve0, reserve1, pairAddress }) => {
		tokenPairTracker.logTokenPair({
			token0,
			token1,
			reserve0,
			reserve1,
			pairAddress,
		});
	},
);
