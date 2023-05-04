const RemoveCommandAbstract = require('../abstract-commands/remove.js');
const simpleRepliesManager = require('../replies-manager/simple.js');

class RemoveSimpleCommand extends RemoveCommandAbstract {
    constructor() {
        super(simpleRepliesManager, 'rb_remove_simple', 'Remove simple reply trigger');
    }
}

module.exports = new RemoveSimpleCommand();