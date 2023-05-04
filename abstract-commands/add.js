const { SlashCommandBuilder } = require('discord.js');

class AddCommandAbstract {
    constructor(name, description, repliesManager) {
        this.repliesManager = repliesManager;
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
        try {
            this.repliesManager.add(
                interaction.options.getString('trigger'),
                interaction.options.getString('response')
            );
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Trigger registered!', ephemeral: true });
    }
}

module.exports = AddCommandAbstract;
