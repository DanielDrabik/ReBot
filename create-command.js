const AbstractCommand = require('./abstract-command.js');

function createCommand(manager, commandName, commandDescription, options = [], executeFn) {
    class Command extends AbstractCommand {
        constructor() {
            super(manager, commandName, commandDescription, options);
        }

        async execute(interaction) {
            await executeFn.call(this, interaction);
        }
    }

    return new Command();
}

module.exports = createCommand;