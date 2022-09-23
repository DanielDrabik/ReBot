const path = './replies/simple.json';
var { RepliesManager } = require('./abstract.js');

const SimpleRepliesManager = new RepliesManager(path);

module.exports = SimpleRepliesManager;