import { UniswapV2Erc20 } from '../../../src/ethereum/v2/uniswap-v2-erc-20';

describe('UniswapV2Erc20', () => {
	let uniswapV2Erc20: UniswapV2Erc20;

	beforeEach(async () => {
		const address = '0x47e4392036b9f5d9db985c76cf9428be0790e9e6';
		uniswapV2Erc20 = await new UniswapV2Erc20({ address }).init();
	});

	test('should be a class', () => {
		expect(uniswapV2Erc20).toBeInstanceOf(UniswapV2Erc20);
	});

	test('should contain the expected instance properties', () => {
		const { name, symbol, decimals, totalSupply } = uniswapV2Erc20;
		console.log({ name, symbol, decimals, totalSupply });

		expect(name).toBe('XBOX');
		expect(symbol).toBe('XBOX');
		expect(decimals).toBe('8');
		expect(totalSupply).toBe('50000000000000');
	});
});
