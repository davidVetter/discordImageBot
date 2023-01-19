const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const { whatOs } = require('../modules/whatOs');

const generateImageFile = whatOs();

const { generateImage } = require(generateImageFile);

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

    const file = await generateImage(
      interaction.id,
      interaction.options.getString('prompt')
    );

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
