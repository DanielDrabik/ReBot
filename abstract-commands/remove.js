const options = [
    option => option.setName('trigger')
        .setDescription('What trigger we should delete')
        .setRequired(true)
];

async function execute(interaction) {
    this.manager.remove(
        interaction.options.getString('trigger')
    ).then(() => interaction.reply({ content: 'Trigger removed!', ephemeral: true })
    ).catch((e) => interaction.reply({ content: e, ephemeral: true }));
}

module.exports = {
    options,
    execute
};