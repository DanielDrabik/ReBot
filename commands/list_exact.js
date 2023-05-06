const createCommand = require('../create-command.js');
const exactRepliesManager = require('../replies-manager/exact.js');
const { execute } = require('../abstract-commands/list.js');

module.exports = createCommand(
    exactRepliesManager, 
    'rb_list_exact', 
    'List all exact trigger with values', 
    [], 
    execute
);
