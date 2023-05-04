const { SlashCommandBuilder } = require('discord.js');

class RemoveCommandAbstract {
    constructor(manager, name, description) {
        this.manager = manager;
        this.data = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description)
            .addStringOption(option =>
                option.setName('trigger')
                    .setDescription('What trigger we should delete')
                    .setRequired(true)
            );
    }

    async execute(interaction) {
        this.manager.remove(
            interaction.options.getString('trigger')
        ).then(() => interaction.reply({ content: 'Trigger removed!', ephemeral: true })
        ).catch((e) => interaction.reply({ content: e, ephemeral: true }));
    }
}

module.exports = RemoveCommandAbstract;
