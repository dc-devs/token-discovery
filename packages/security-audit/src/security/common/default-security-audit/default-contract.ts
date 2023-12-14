import { IContract } from '../interfaces';

const defaultContract: IContract = {
	// DeFi
	hasVulnerableWithrawlFunction: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasReentrancy: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	arelocksDetected: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasVerifiedSourceCode: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isMintable: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isTransferPausable: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canContractBeUpgraded: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasBlacklist: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasTransferFee: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canTokenBeSoldThroughAMM: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasTransferLimit: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasApprovalVulnerability: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canOwnerAbuseApprovals: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasInterfaceErrors: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasBlockingLoops: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasCentralizedBalanceControls: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasTransferCooldown: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasApprovalRestrictions: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasExternalCalls: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasAirdropSpecificCode: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasVulnerableOwnershipFunctions: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canRetrieveOwnership: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isRecentlyDeployedContract: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasMixers: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canAdjustMaximalSupply: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	ownerHasPreviousScams: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canUserTaxBeModified: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canWalletsBeWhitelisted: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canTransfersBeBlockedViaChangingRouter: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasEthDraining: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasRecentInteraction: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasNativeTokenDrainage: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasHardcodedUniswapRouter: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasUnusualOnChainMarkers: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasHighRevocations: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isInitializerProtected: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	// GoPlus
	isContractOpenSource: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isHoneyPot: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isHoneyPotWithSameCreator: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	buyTax: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	sellTax: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasProxyContract: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isBuyingAvailable: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canUserSellAll: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	canTaxBeModdified: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isAntiWhale: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isAntiWhaleModifiable: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasTradingCoolDown: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isTrueToken: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	isOnTrustList: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
	hasHiddenOwners: {
		result: null,
		value: null,
		modifiable: null,
		impact: null,
		confidence: null,
		deFiIssues: [],
	},
};

export { defaultContract };