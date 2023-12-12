// // import { TokenPairReporter } from './token-pair-reporter';
// import { TokenPairTracker } from './token-pair-tracker';
// import { pubSub, PubSubEvent } from '@token-discovery/common';

// // const reporter = new Reporter();
// const tokenPairTracker = new TokenPairTracker();

// // emits: PubSubEvent.NewTokenPairCreated
// tokenPairTracker.start();

// // TODO: DoubleCheck the DeFi api seems like some data points "centralized controls"

// pubSub.on(
// 	PubSubEvent.NewTokenPairCreated,
// 	async ({ token0, token1, reserve0, reserve1, pairAddress }) => {
// 		setTimeout(async () => {
// 			reporter.logTokenPair({
// 				token0,
// 				token1,
// 				reserve0,
// 				reserve1,
// 				pairAddress,
// 			});
// 		}, 60000);
// 	},
// );
