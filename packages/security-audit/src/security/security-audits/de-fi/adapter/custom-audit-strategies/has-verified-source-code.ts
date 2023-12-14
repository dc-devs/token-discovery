import { getHighestImpactIssue } from '../../common/utils';
import { IAuditStrategyOptions } from '../../common/interfaces';

const hasVerifiedSourceCode = ({
	key,
	issues,
	contract,
}: IAuditStrategyOptions) => {
	const highestImpactIssue = getHighestImpactIssue({
		issues,
	});

	contract[key] = {
		impact: highestImpactIssue?.impact || null,
		confidence: highestImpactIssue?.confidence || null,
		result: issues.length === 0,
		value: null,
		modifiable: null,
		deFiIssues: issues,
	};
};

export { hasVerifiedSourceCode };
