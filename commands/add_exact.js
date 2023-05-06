const createCommand = require('../create-command.js');
const exactRepliesManager = require('../replies-manager/exact.js');
const { options, execute } = require('../abstract-commands/add.js');

module.exports = createCommand(
    exactRepliesManager, 
    'rb_add_exact', 
    'Register exact reply trigger', 
    options, 
    execute
);