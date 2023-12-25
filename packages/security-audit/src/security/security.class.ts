import { ISecurityAudit, IAnalysis } from './common/interfaces';
import { mergeSecurityAudits } from './merge-security-audits';
import { analyzeSecurityAudit } from './analyze-security-audit';
import {
	runDeFiSecurityAudit,
	runGoPlusSecurityAudit,
} from './security-audits';

interface IFinalResults {
	token?: ISecurityAudit['token'];
	purchase?: IAnalysis['purchase'];
	owner?: ISecurityAudit['owner'];
	creator?: ISecurityAudit['creator'];
	dexData?: ISecurityAudit['dexData'];
	liquidityProvider?: ISecurityAudit['liquidityProvider'];
	holders?: ISecurityAudit['holders'];
	other?: ISecurityAudit['other'];
	risk?: IAnalysis['risk'];
}

interface IConstructorOptions {
	chainId: string;
}

class Security {
	chainId: string;
	finalAnalysis?: IAnalysis;
	finalSecurityAudit?: ISecurityAudit;
	finalResults?: IFinalResults;

	constructor({ chainId }: IConstructorOptions) {
		this.chainId = chainId;
	}

	generateFinalResults({
		finalAnalysis,
		finalSecurityAudit,
	}: {
		finalAnalysis?: IAnalysis;
		finalSecurityAudit?: ISecurityAudit;
	}): IFinalResults {
		const finalResults = {
			token: finalSecurityAudit?.token,
			purchase: finalAnalysis?.purchase,
			owner: finalSecurityAudit?.owner,
			creator: finalSecurityAudit?.creator,
			dexData: finalSecurityAudit?.dexData,
			liquidityProvider: finalSecurityAudit?.liquidityProvider,
			holders: finalSecurityAudit?.holders,
			other: finalSecurityAudit?.other,
			risk: finalAnalysis?.risk,
		};

		return finalResults;
	}

	async start({ address }: { address: string }) {
		const goPlusSecurityAudit = await runGoPlusSecurityAudit({
			address,
			chainId: this.chainId,
		});

		const deFiSecurityAudit = await runDeFiSecurityAudit({
			address,
			chainId: this.chainId,
		});

		const finalSecurityAudit = mergeSecurityAudits({
			deFi: deFiSecurityAudit,
			goPlus: goPlusSecurityAudit,
		});

		const finalAnalysis = analyzeSecurityAudit({
			securityAudit: finalSecurityAudit,
		});

		const finalResults = this.generateFinalResults({
			finalAnalysis: finalAnalysis,
			finalSecurityAudit: finalSecurityAudit,
		});

		this.finalSecurityAudit = finalSecurityAudit;
		this.finalAnalysis = finalAnalysis;
		this.finalResults = finalResults;

		return finalResults;
	}

	displayResults() {
		if (this.finalAnalysis?.purchase?.isSafe) {
			console.log(this.finalResults);
			console.log('');
			console.log('-----------------');
			console.log('Detailed Risk');
			console.log('-----------------');
			console.log(this.finalAnalysis?.purchase);
			console.log(this.finalAnalysis?.risk);
		}

		// if (this.finalAnalysis?.risk?.critical) {
		// 	Object.keys(this.finalAnalysis?.risk?.critical).forEach(
		// 		(criticalIssueName) => {
		// 			const criticalIssue =
		// 				this.finalAnalysis?.risk?.critical[criticalIssueName];

		// 			console.log(criticalIssue?.value?.privileged);
		// 			console.log(criticalIssue?.deFiIssues[0].additionalData);
		// 		},
		// 	);
		// }
	}
}

export { Security };

// https://de.fi/scanner/contract/0x75c97384ca209f915381755c582ec0e2ce88c1ba?1

// TODO:
// Add defi honeypot sccanner
//
// While scanning seperate:
// Scam tokens
// Tokens with no liquidity into (more follow up needed)
//  -- We are seeing that these tokens are usually copies of tokens that already exist
// Safe to Buy

// Add twitter search, if finds tokens with same name, maybe mark as duplicate?
// Use chatGPT to assess sentiment, check for duplicates, etc..

// Defi found: https://de.fi/scanner/contract/0x3c3ec22624019221801d45b0bfe50d0e7cceb862?chainId=eth
// RugPull Risk.. Do we need add additinoall lliquidity checks as well?

// Most "Safe tokens" so far are duplicates..
