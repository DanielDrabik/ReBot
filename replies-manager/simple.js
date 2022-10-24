const path = './replies/simple.json';
var { RepliesManager } = require('./abstract.js');

class SimpleRepliesManager extends RepliesManager {
    getResponse(message) {
        let response = '';

        const simpleReplies = this.get();
        Object.keys(simpleReplies).forEach(function (trigger) {
            if (message.toLowerCase().includes(trigger.toLowerCase())) {
                return response = simpleReplies[trigger];
            }
        });

        return response;
    }
}

const SimpleRepliesManagerObj = new SimpleRepliesManager(path);

module.exports = SimpleRepliesManagerObj;
