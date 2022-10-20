const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
var simpleRepliesManager = require('./replies-manager/simple.js');
var exactRepliesManager = require('./replies-manager/exact.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
}

client.login(token);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

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

    const exactReplies = exactRepliesManager.get();
    if (exactReplies[message]) {
        client.channels.cache.get(interaction.channelId).send(exactReplies[message]);
        return;
    }

    const simpleReplies = simpleRepliesManager.get();
    Object.keys(simpleReplies).forEach(function (trigger) {
        if (message.toLowerCase().includes(trigger.toLowerCase())) {
            client.channels.cache.get(interaction.channelId).send(simpleReplies[trigger]);
            return;
        }
    });
});