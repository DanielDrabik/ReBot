const AddCommandAbstract = require('../abstract-commands/add.js');
const exactRepliesManager = require('../replies-manager/exact.js');

class AddExactCommand extends AddCommandAbstract {
    constructor() {
        super(exactRepliesManager, 'rb_add_exact', 'Register exact reply trigger');
    }
}

module.exports = new AddExactCommand();
