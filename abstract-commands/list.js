const { SlashCommandBuilder } = require('discord.js');

class ListCommandAbstract {
    constructor(manager, name, description) {
        this.manager = manager;
        this.data = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description);
    }

    async execute(interaction) {
        let list = '';

        try {
           list = await this.manager.getList();
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: list, ephemeral: true });
    }
}

module.exports = ListCommandAbstract;
