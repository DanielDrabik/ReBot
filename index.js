const path = require('path');
const fs = require('fs');

require('dotenv').config();

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { TOKEN } = process.env;

var simpleRepliesManager = require('./replies-manager/simple.js');
var exactRepliesManager = require('./replies-manager/exact.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
] });

setCommands();

client.login(TOKEN);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('messageCreate', async interaction => {
    if (interaction.author.bot) {
        return;
    }

    const message = interaction.content;
    let response = '';

    if (response = await exactRepliesManager.getResponse(message)) {
        client.channels.cache
            .get(interaction.channelId)
            .send(response);
    } else if (response = await simpleRepliesManager.getResponse(message)) {
        client.channels.cache
            .get(interaction.channelId)
            .send(response);
    }
});

function setCommands() {
    client.commands = new Collection();

    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
    
        client.commands.set(command.data.name, command);
    }
}