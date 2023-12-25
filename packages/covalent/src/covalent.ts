import { config } from 'dotenv';
import path from 'path';
import { CovalentClient } from '@covalenthq/client-sdk';

const pathToEnv = path.join(__dirname, '..', '..', '..', '.env');

config({
	path: pathToEnv,
});

const covalent = async () => {
	const covalentApiKey = process.env.COVELENT_API_KEY;

	if (covalentApiKey) {
		const client = new CovalentClient(covalentApiKey);
		const resppnse =
			await client.BalanceService.getTokenBalancesForWalletAddress(
				'eth-mainnet',
				'0x4B7F04f7960db235CFB333721F9eE51a5929AB35',
			);

		console.log(resppnse.data);
	}
};

export { covalent };
