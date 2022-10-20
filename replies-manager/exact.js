const path = './replies/exact.json';
var { RepliesManager } = require('./abstract.js');

const ExactRepliesManager = new RepliesManager(path);

module.exports = ExactRepliesManager;