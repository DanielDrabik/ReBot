const AddCommandAbstract = require('../abstract-commands/add.js');
const simpleRepliesManager = require('../replies-manager/simple.js');

class AddSimpleCommand extends AddCommandAbstract {
    constructor() {
        super(simpleRepliesManager, 'rb_add_simple', 'Register simple reply trigger');
    }
}

module.exports = new AddSimpleCommand();
