import { PubSub, PubSubEvent } from '@token-discovery/pub-sub';
import { TokenPairTracker } from './token-pair-tracker';

const pubSub = new PubSub();
const tokenPairTracker = new TokenPairTracker({ pubSub });

tokenPairTracker.start();

tokenPairTracker.pubSub.on(
	PubSubEvent.NewTokenPairCreated,
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
