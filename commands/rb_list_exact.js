const { SlashCommandBuilder } = require('discord.js');
var exactRepliesManager = require('../replies-manager/exact.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_list_exact')
		.setDescription('List all exact trigger with values'),
	async execute(interaction) {
        let list = '';

        try {
            list = exactRepliesManager.getList();                    
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: list, ephemeral: true });  
	},
};