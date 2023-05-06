const tableName = 'simple_replies';
var { RepliesManager } = require('./abstract.js');

class SimpleRepliesManager extends RepliesManager {
    async getResponse(message) {
        let response = '';

        const simpleReplies = await this.get();
        Object.keys(simpleReplies).forEach(function (trigger) {
            if (message.toLowerCase().includes(trigger.toLowerCase())) {
                return response = simpleReplies[trigger];
            }
        });

        return response;
    }
}

const SimpleRepliesManagerObj = new SimpleRepliesManager(tableName);

module.exports = SimpleRepliesManagerObj;
