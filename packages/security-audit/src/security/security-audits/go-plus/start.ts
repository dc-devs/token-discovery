import { getCommandLineArguments } from '@token-discovery/utils';
import { runGoPlusSecurityAudit } from './run-go-plus-security-audit';

(async () => {
	const cliArgs = getCommandLineArguments();
	const { address, chainId } = cliArgs;

	const goPlusSecurityAudit = await runGoPlusSecurityAudit({
		chainId,
		address,
	});

	console.log(goPlusSecurityAudit);
})();
