const { SlashCommandBuilder } = require('discord.js');

class AbstractCommand {
    constructor(manager, name, description, options = []) {
        this.manager = manager;
        this.data = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description);

        options.forEach(option => {
            this.data.addStringOption(option);
        });
    }

    async execute(interaction) {
        // To be implemented in the child classes
    }
}

module.exports = AbstractCommand;