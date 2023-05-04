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
        try {
            this.manager.remove(
                interaction.options.getString('trigger')
            );
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Trigger removed!', ephemeral: true });
    }
}

module.exports = RemoveCommandAbstract;
