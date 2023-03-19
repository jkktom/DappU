async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")

  //Deploy contract
  const token = await Token.deploy(
    'Dapp University', 'DAPP', '1000000')
  await token.deployed()
  console.log(`Token Deployed to : ${token.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {console.error(error);process.exit(1);});
