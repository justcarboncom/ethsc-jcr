// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const JCR = artifacts.require("JCR");

module.exports = function(deployer) {
    deployer.deploy(JCR);
};
