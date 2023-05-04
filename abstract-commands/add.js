const { SlashCommandBuilder } = require('discord.js');

class AddCommandAbstract {
    constructor(manager, name, description) {
        this.manager = manager;
        this.data = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description)
            .addStringOption(option =>
                option.setName('trigger')
                    .setDescription('What message should trigger reply')
                    .setRequired(true)
            )
            .addStringOption(option =>
                option.setName('response')
                    .setDescription('What should be the response')
                    .setRequired(true)
            );
    }

    async execute(interaction) {
        this.manager.add(
            interaction.options.getString('trigger'),
            interaction.options.getString('response')
        ).then(() => interaction.reply({ content: 'Trigger registered!', ephemeral: true })
        ).catch((e) => interaction.reply({ content: e, ephemeral: true }));
    }
}

module.exports = AddCommandAbstract;
