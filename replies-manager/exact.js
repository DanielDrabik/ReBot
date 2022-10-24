const path = './replies/exact.json';
var { RepliesManager } = require('./abstract.js');

class ExactRepliesManager extends RepliesManager {
    getResponse(message) {
        return this.get()[message] || '';
    }
}

const ExactRepliesManagerObj = new ExactRepliesManager(path);

module.exports = ExactRepliesManagerObj;