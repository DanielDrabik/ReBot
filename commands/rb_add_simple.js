const { SlashCommandBuilder } = require('discord.js');
var simpleRepliesManager = require('../replies-manager/simple.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_add_simple')
		.setDescription('Register simple reply trigger')
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
            simpleRepliesManager.add(
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