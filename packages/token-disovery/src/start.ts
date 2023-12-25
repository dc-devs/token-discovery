import { Security } from '@token-discovery/security-audit';
import { selectNewToken } from '@token-discovery/utils';
import { PubSub, PubSubEvent } from '@token-discovery/pub-sub';
import { TokenPairTracker } from '@token-discovery/token-tracker';

const chainId = '1';
const pubSub = new PubSub();
const security = new Security({ chainId });
const tokenPairTracker = new TokenPairTracker({ pubSub });

tokenPairTracker.start();

tokenPairTracker.pubSub.on(
	PubSubEvent.NewTokenPairCreated,
	async ({ token0, token1, reserve0, reserve1, pairAddress }) => {
		tokenPairTracker.logTokenPair({
			token0,
			token1,
			reserve0,
			reserve1,
			pairAddress,
		});

		const newTokenAddress = selectNewToken({
			token0,
			token1,
		});

		console.log('newTokenAddress', newTokenAddress);

		const { address } = newTokenAddress;

		await security.start({ address });

		security.displayResults();
	},
);
