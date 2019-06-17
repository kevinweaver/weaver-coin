const SimpleStorage = artifacts.require("SimpleStorage");
const WeaverCoin = artifacts.require("WeaverCoin");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(WeaverCoin);
  deployer.deploy(ComplexStorage);
};
