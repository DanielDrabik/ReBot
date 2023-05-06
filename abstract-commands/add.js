const options = [
    option => option.setName('trigger')
        .setDescription('What message should trigger reply')
        .setRequired(true),
    option => option.setName('response')
        .setDescription('What should be the response')
        .setRequired(true)
];

async function execute(interaction) {
    this.manager.add(
        interaction.options.getString('trigger'),
        interaction.options.getString('response')
    ).then(() => interaction.reply({ content: 'Trigger registered!', ephemeral: true })
    ).catch((e) => interaction.reply({ content: e, ephemeral: true }));
}

module.exports = {
    options,
    execute
};