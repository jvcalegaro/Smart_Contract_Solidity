const JCToken = artifacts.require("JCToken");

module.exports = async function (deployer) {
    await deployer.deploy(JCToken)
};