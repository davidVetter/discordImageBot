const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("imagine")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("The prompt for the image")
        .setRequired(true)
    )
    .setDescription("Imagine an IMAGE!"),
  async execute(interaction) {
    console.log(interaction.options.getString('prompt'));
    await interaction.reply({ content: "Pong to Pong Pong Pong!" });
  },
};
