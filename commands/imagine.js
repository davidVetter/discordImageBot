const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
// const { generateImage } = require("../src/generateImage");
const { generateImage } = require('../didThisWork');

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
    await interaction.deferReply();
    console.log('This happened before the file!!');

    const file = await generateImage(
      interaction.id,
      interaction.options.getString('prompt')
    );
    console.log('This is file!!: ', file);

    await interaction.editReply({
      embeds: [
        {
          title: interaction.options.getString('prompt'),
          image: {
            url: 'attachment://image.jpg',
          },
        },
      ],
      files: [new AttachmentBuilder(file, "image.jpg")],
    });
  },
};
