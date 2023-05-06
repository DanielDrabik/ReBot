const tableName = 'exact_replies';
var { RepliesManager } = require('./abstract.js');

class ExactRepliesManager extends RepliesManager {
    async getResponse(message) {
        const exactReplies = await this.get();
        return exactReplies[message] || '';
    }
}

const ExactRepliesManagerObj = new ExactRepliesManager(tableName);

module.exports = ExactRepliesManagerObj;