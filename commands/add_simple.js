const AddCommandAbstract = require('../abstract-commands/add.js');
const simpleRepliesManager = require('../replies-manager/simple.js');

class AddSimpleCommand extends AddCommandAbstract {
    constructor() {
        super('rb_add_simple', 'Register simple reply trigger', simpleRepliesManager);
    }
}

module.exports = new AddSimpleCommand();
