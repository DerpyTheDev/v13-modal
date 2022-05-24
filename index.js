//dependencies
require('dotenv');
const {
   Client,
   Modal,
   MessageButton,
   MessageActionRow,
   TextInputComponent
} = require('discord.js');
const client = new Client({
   intents: 32767
});
const colors = require('colors');
const config = require('./config.json');
const prefix = config.PREFIX;

//ready event
client.on('ready', async () => {
   await client.user.setActivity({ type: config.ACTIVITY.type, name: ${config.ACTIVITY.name + 'By DerpyDev♥️' });
   await client.user.setStatus(config.ACTIVITY.status);
   console.log(`${client.user.tag} Is ${config.ACTIVITY.type.toLowerCase()} ${config.ACTIVITY.name}`.brightGreen);
});

//message event
client.on('messageCreate', async message => {
            if (message.content == prefix + 'favourite color') {
               return await message.reply({
                  content: 'Tell Everyone Your Favourite Color!',
                  components: [new MessageActionRow()
                     .addComponents(new MessageButton()
                        .setLabel('Click Me!')
                        .setStyle('PRIMARY')
                        .setEmoji('ðŸ˜€')
                        .setCustomId('button')
                        .setDisabled(false))
                  ],
                  ephemeral: true
               });
            } else if (message.content == prefix + 'ping') {
               return await message.reply({
                  content: `API: **${client.ws.ping}**ms`
               });
            } else if (message.content == prefix + 'help') {
               return await message.reply({
                     content: `${prefix}ping\n- Get the bot's latency\n${prefix}favourite color\n- Tell everyone your favourite color!`,
                     ephemeral: false
                   });
                 } else return;
               });

            //button interaction
            client.on('interactionCreate', async interaction => {
               if (!interaction.isButton()) return;
               if (interaction.customId == 'button') {
                  const modal = new Modal()
                     .setCustomId('modal')
                     .setTitle('Tell everyone your favourite color!');
                  modal.addComponents(new MessageActionRow()
                     .addComponents(new TextInputComponent()
                        .setCustomId('color')
                        .setLabel("What's your favorite color?")
                        .setStyle('SHORT')
                     ));

                  await interaction.showModal(modal);
               };
            });

            //modal interaction
            client.on('interactionCreate', async interaction => {
               if (!interaction.isModalSubmit()) return;
               if (interaction.customId == 'modal') {
                  const color = interaction.fields.getTextInputValue('color');
                  const myOpinion = ['GrossðŸ¤®', 'BeautifulðŸ˜€', 'DisgustingðŸ¤¢', 'PrettyðŸŒ¸'];
                  await interaction.reply({
                     content: `**${color}** is a *${myOpinion[Math.floor(Math.random() * myOpinion.length)]}* color!`,
                     ephemeral: true
                  })
                .then(interaction.channel.send({
                        content: `${interaction.user.toString()}'s favourite color is **${color}**`
                     }));
                 } else return;
            });

//start bot
client.login(config.TOKEN || process.env.TOKEN)
