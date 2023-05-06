async function execute(interaction) {
    let list = '';

    try {
        list = await this.manager.getList();
    } catch (e) {
        await interaction.reply({ content: e.message, ephemeral: true });
        return;
    }

    await interaction.reply({ content: list, ephemeral: true });
}

module.exports = {
    execute
};