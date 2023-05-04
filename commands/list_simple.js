const ListCommandAbstract = require('../abstract-commands/list.js'); 
const simpleRepliesManager = require('../replies-manager/simple.js');

class ListSimpleCommand extends ListCommandAbstract {
    constructor() {
        super(simpleRepliesManager, 'rb_list_simple', 'List all simple trigger with values');
    }
}

module.exports = new ListSimpleCommand();
