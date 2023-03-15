const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
	return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe ('Token', () => {
	let token;

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token')
		token = await Token.deploy(
			'Dapp Univ', 
			'DAPP',
			'1000000'
		)
	});

	describe('Deployment', () => {
		const name = 'Dapp Univ'
		const symbol = 'DAPP'
		const decimals = '18'
		const totalSupply = tokens('1000000')

		it ('has correct name', async () => {
			expect(await token.name()).to.equal('Dapp Univ');
		});

		it ('has correct symbol', async () => {
			expect(await token.symbol()).to.equal('DAPP');
		});
		
		it ('has correct decimals', async () => {
			expect(await token.decimals()).to.equal('18');
		});

		it ('has correct total supply', async () => {
			expect(await token.totalSupply()).to.equal(totalSupply);
		});
	})
});


