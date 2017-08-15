var InvestorRegister = artifacts.require("./InvestorRegister.sol");

module.exports = function(deployer) {
  deployer.deploy(InvestorRegister);
};

