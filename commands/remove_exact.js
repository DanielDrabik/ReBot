const createCommand = require('../create-command.js');
const exactRepliesManager = require('../replies-manager/exact.js');
const { options, execute } = require('../abstract-commands/remove.js');

module.exports = createCommand(
    exactRepliesManager, 
    'rb_remove_exact', 
    'Remove exact reply trigger', 
    options, 
    execute
);