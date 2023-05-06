const createCommand = require('../create-command.js');
const simpleRepliesManager = require('../replies-manager/simple.js');
const { options, execute } = require('../abstract-commands/add.js');

module.exports = createCommand(
    simpleRepliesManager, 
    'rb_add_simple', 
    'Register simple reply trigger', 
    options, 
    execute
);