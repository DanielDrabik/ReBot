const ListCommandAbstract = require('../abstract-commands/list.js');
const exactRepliesManager = require('../replies-manager/exact.js');

class ListExactCommand extends ListCommandAbstract {
    constructor() {
        super(exactRepliesManager, 'rb_list_exact', 'List all exact trigger with values');
    }
}

module.exports = new ListExactCommand();
