// works with older react native versions
// const blacklist = require('metro').createBlacklist;

const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
};
