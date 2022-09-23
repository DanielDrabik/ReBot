const { SlashCommandBuilder } = require('discord.js');
var simpleRepliesManager = require('../replies-manager/simple.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rb_list_simple')
		.setDescription('List all simple trigger with values'),
	async execute(interaction) {
        let list = '';

        try {
            list = simpleRepliesManager.getList();                    
        } catch (e) {
            await interaction.reply({ content: e.message, ephemeral: true });
            return;
        }

        await interaction.reply({ content: list, ephemeral: true });  
	},
};