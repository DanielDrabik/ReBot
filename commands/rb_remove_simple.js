const { SlashCommandBuilder } = require('discord.js');
var simpleRepliesManager = require('../replies-manager/simple.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_remove_simple')
		.setDescription('Remove simple reply trigger')
        .addStringOption(option =>
            option.setName('trigger')
                .setDescription('What trigger we should delete')
                .setRequired(true)
        ),
	async execute(interaction) {
        try {
            simpleRepliesManager.remove(
                interaction.options.getString('trigger')
            );
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Trigger removed!', ephemeral: true });
	},
};