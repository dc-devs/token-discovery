import { TokenPairTracker } from './token-pair-tracker';

const tokenPairTracker = new TokenPairTracker();

// emits: PubSubEvent.NewTokenPairCreated
tokenPairTracker.start();
