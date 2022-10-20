const { SlashCommandBuilder } = require('discord.js');
var exactRepliesManager = require('../replies-manager/exact.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_add_exact')
		.setDescription('Register exact reply trigger')
        .addStringOption(option =>
            option.setName('trigger')
                .setDescription('What message should trigger reply')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('response')
                .setDescription('What should be the response')
                .setRequired(true)
        ),
	async execute(interaction) {
        try {
            exactRepliesManager.add(
                interaction.options.getString('trigger'), 
                interaction.options.getString('response')
            );            
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Trigger registered!', ephemeral: true });
	},
};