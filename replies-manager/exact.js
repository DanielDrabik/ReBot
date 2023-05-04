const tableName = 'exact_replies';
var { RepliesManager } = require('./abstract.js');

class ExactRepliesManager extends RepliesManager {
    getResponse(message) {
        return this.get()[message] || '';
    }
}

const ExactRepliesManagerObj = new ExactRepliesManager(tableName);

module.exports = ExactRepliesManagerObj;