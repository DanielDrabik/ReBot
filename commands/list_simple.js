const createCommand = require('../create-command.js');
const simpleRepliesManager = require('../replies-manager/simple.js');
const { execute } = require('../abstract-commands/list.js');

module.exports = createCommand(
    simpleRepliesManager, 
    'rb_list_simple', 
    'List all simple trigger with values', 
    [], 
    execute
);