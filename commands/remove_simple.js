const createCommand = require('../create-command.js');
const simpleRepliesManager = require('../replies-manager/simple.js');
const { options, execute } = require('../abstract-commands/remove.js');

module.exports = createCommand(
    simpleRepliesManager, 
    'rb_remove_simple', 
    'Remove simple reply trigger', 
    options, 
    execute
);