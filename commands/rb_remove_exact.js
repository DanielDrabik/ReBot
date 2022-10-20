const { SlashCommandBuilder } = require('discord.js');
var exactRepliesManager = require('../replies-manager/exact.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_remove_exact')
		.setDescription('Remove exact reply trigger')
        .addStringOption(option =>
            option.setName('trigger')
                .setDescription('What trigger we should delete')
                .setRequired(true)
        ),
	async execute(interaction) {
        try {
            exactRepliesManager.remove(
                interaction.options.getString('trigger')
            );
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Trigger removed!', ephemeral: true });
	},
};