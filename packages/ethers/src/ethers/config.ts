// TODO: Upadate config path
import 'dotenv/config';
import { EthereumNetwork } from './enums';

const network = EthereumNetwork.Mainnet;
const infuraProjectId = process.env.INFURA_PROJECT_ID;
const infuraProjectApiSecret = process.env.INFURA_PROJECT_API_SECRET;

const config = {
	network,
	infuraProjectId,
	infuraProjectApiSecret,
};

export { config };
