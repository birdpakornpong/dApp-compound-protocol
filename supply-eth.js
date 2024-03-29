const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");

// Your Ethereum wallet private key
const privateKey =
  "b8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329";

// Add your Ethereum wallet to the Web3 object
web3.eth.accounts.wallet.add("0x" + privateKey);
const myWalletAddress = web3.eth.accounts.wallet[0].address;

// Main Net Contract for cETH (the supply process is different for cERC20 tokens)
const contractAddress = "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5";
const abiJson = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "mint",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "reserveFactorMantissa",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "account", type: "address" }],
    name: "borrowBalanceCurrent",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "exchangeRateStored",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "src", type: "address" },
      { name: "dst", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOfUnderlying",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCash",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newComptroller", type: "address" }],
    name: "_setComptroller",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalBorrows",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "repayBorrow",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "comptroller",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "reduceAmount", type: "uint256" }],
    name: "_reduceReserves",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialExchangeRateMantissa",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "accrualBlockNumber",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "totalBorrowsCurrent",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "redeemAmount", type: "uint256" }],
    name: "redeemUnderlying",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalReserves",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "borrowBalanceStored",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "accrueInterest",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "dst", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "borrowIndex",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "borrower", type: "address" },
      { name: "cTokenCollateral", type: "address" },
    ],
    name: "liquidateBorrow",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "supplyRatePerBlock",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "liquidator", type: "address" },
      { name: "borrower", type: "address" },
      { name: "seizeTokens", type: "uint256" },
    ],
    name: "seize",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newPendingAdmin", type: "address" }],
    name: "_setPendingAdmin",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "exchangeRateCurrent",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "getAccountSnapshot",
    outputs: [
      { name: "", type: "uint256" },
      { name: "", type: "uint256" },
      { name: "", type: "uint256" },
      { name: "", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "borrowAmount", type: "uint256" }],
    name: "borrow",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "redeemTokens", type: "uint256" }],
    name: "redeem",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "borrower", type: "address" }],
    name: "repayBorrowBehalf",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "_acceptAdmin",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newInterestRateModel", type: "address" }],
    name: "_setInterestRateModel",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "interestRateModel",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "borrowRatePerBlock",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newReserveFactorMantissa", type: "uint256" }],
    name: "_setReserveFactor",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isCToken",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "comptroller_", type: "address" },
      { name: "interestRateModel_", type: "address" },
      { name: "initialExchangeRateMantissa_", type: "uint256" },
      { name: "name_", type: "string" },
      { name: "symbol_", type: "string" },
      { name: "decimals_", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "interestAccumulated", type: "uint256" },
      { indexed: false, name: "borrowIndex", type: "uint256" },
      { indexed: false, name: "totalBorrows", type: "uint256" },
    ],
    name: "AccrueInterest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "minter", type: "address" },
      { indexed: false, name: "mintAmount", type: "uint256" },
      { indexed: false, name: "mintTokens", type: "uint256" },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "redeemer", type: "address" },
      { indexed: false, name: "redeemAmount", type: "uint256" },
      { indexed: false, name: "redeemTokens", type: "uint256" },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "borrower", type: "address" },
      { indexed: false, name: "borrowAmount", type: "uint256" },
      { indexed: false, name: "accountBorrows", type: "uint256" },
      { indexed: false, name: "totalBorrows", type: "uint256" },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "payer", type: "address" },
      { indexed: false, name: "borrower", type: "address" },
      { indexed: false, name: "repayAmount", type: "uint256" },
      { indexed: false, name: "accountBorrows", type: "uint256" },
      { indexed: false, name: "totalBorrows", type: "uint256" },
    ],
    name: "RepayBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "liquidator", type: "address" },
      { indexed: false, name: "borrower", type: "address" },
      { indexed: false, name: "repayAmount", type: "uint256" },
      { indexed: false, name: "cTokenCollateral", type: "address" },
      { indexed: false, name: "seizeTokens", type: "uint256" },
    ],
    name: "LiquidateBorrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldPendingAdmin", type: "address" },
      { indexed: false, name: "newPendingAdmin", type: "address" },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldAdmin", type: "address" },
      { indexed: false, name: "newAdmin", type: "address" },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldComptroller", type: "address" },
      { indexed: false, name: "newComptroller", type: "address" },
    ],
    name: "NewComptroller",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldInterestRateModel", type: "address" },
      { indexed: false, name: "newInterestRateModel", type: "address" },
    ],
    name: "NewMarketInterestRateModel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "oldReserveFactorMantissa", type: "uint256" },
      { indexed: false, name: "newReserveFactorMantissa", type: "uint256" },
    ],
    name: "NewReserveFactor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "admin", type: "address" },
      { indexed: false, name: "reduceAmount", type: "uint256" },
      { indexed: false, name: "newTotalReserves", type: "uint256" },
    ],
    name: "ReservesReduced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "error", type: "uint256" },
      { indexed: false, name: "info", type: "uint256" },
      { indexed: false, name: "detail", type: "uint256" },
    ],
    name: "Failure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
];
const cEthContract = new web3.eth.Contract(abiJson, contractAddress);

const ethDecimals = 18; // Ethereum has 18 decimal places

const main = async function () {
  let ethBalance =
    (await web3.eth.getBalance(myWalletAddress)) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, "\n");

  console.log("Supplying ETH to the Compound Protocol...", "\n");
  // Mint some cETH by supplying ETH to the Compound Protocol
  await cEthContract.methods.mint().send({
    from: myWalletAddress,
    gasLimit: web3.utils.toHex(250000),
    gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
    value: web3.utils.toHex(web3.utils.toWei("1", "ether")),
  });

  console.log('cETH "Mint" operation successful.', "\n");

  const balanceOfUnderlying =
    web3.utils.toBN(
      await cEthContract.methods.balanceOfUnderlying(myWalletAddress).call()
    ) / Math.pow(10, ethDecimals);

  console.log(
    "ETH supplied to the Compound Protocol:",
    balanceOfUnderlying,
    "\n"
  );

  let cTokenBalance =
    (await cEthContract.methods.balanceOf(myWalletAddress).call()) / 1e8;

  console.log("My wallet's cETH Token Balance:", cTokenBalance, "\n");

  let exchangeRateCurrent = await cEthContract.methods
    .exchangeRateCurrent()
    .call();
  exchangeRateCurrent =
    exchangeRateCurrent / Math.pow(10, 18 + ethDecimals - 8);
  console.log(
    "Current exchange rate from cETH to ETH:",
    exchangeRateCurrent,
    "\n"
  );

  console.log("Redeeming the cETH for ETH...", "\n");

  console.log("Exchanging all cETH based on cToken amount...", "\n");
  await cEthContract.methods.redeem(cTokenBalance * 1e8).send({
    from: myWalletAddress,
    gasLimit: web3.utils.toHex(500000),
    gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
  });

  // console.log('Exchanging all cETH based on underlying ETH amount...', '\n');
  // let ethAmount = web3.utils.toWei(balanceOfUnderlying).toString()
  // await cEthContract.methods.redeemUnderlying(ethAmount).send({
  //   from: myWalletAddress,
  //   gasLimit: web3.utils.toHex(150000),
  //   gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
  // });

  cTokenBalance =
    (await cEthContract.methods.balanceOf(myWalletAddress).call()) / 1e8;
  console.log("My wallet's cETH Token Balance:", cTokenBalance);

  ethBalance =
    (await web3.eth.getBalance(myWalletAddress)) / Math.pow(10, ethDecimals);
  console.log("My wallet's ETH balance:", ethBalance, "\n");
};

main().catch((err) => {
  console.error(err);
});
