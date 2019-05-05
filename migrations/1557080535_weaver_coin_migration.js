let WeaverCoin = artifacts.require("./WeaverCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(WeaverCoin);
};
