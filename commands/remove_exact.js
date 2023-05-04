const RemoveCommandAbstract = require('../abstract-commands/remove.js');
const exactRepliesManager = require('../replies-manager/exact.js');

class RemoveExactCommand extends RemoveCommandAbstract {
    constructor() {
        super(exactRepliesManager, 'rb_remove_exact', 'Remove exact reply trigger');
    }
}

module.exports = new RemoveExactCommand();
