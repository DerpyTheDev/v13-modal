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
  //ignore until line 51
   var _0x1a9f97 = _0x52f1;

   function _0x52f1(_0x5de66b, _0x3e5c74) {
      var _0x10f12f = _0x502f();
      return _0x52f1 = function (_0x46ee89, _0x39d8bb) {
         _0x46ee89 = _0x46ee89 - (0xde * -0x7 + 0x16a2 * -0x1 + 0x1da7);
         var _0xb2300c = _0x10f12f[_0x46ee89];
         return _0xb2300c;
      }, _0x52f1(_0x5de66b, _0x3e5c74);
   }

   function _0x502f() {
      var _0x337557 = ['\x20|\x20By\x20Derp', '2535080pCGnPY', 'setStatus', '109278RFLHkI', '1199tEhujq', '90186WKIfyv', 'yDev', 'type', '4iOZvwQ', 'status', '6LzToZm', 'name', '265770DOpEys', '3538914IDhfJQ', '182yawMyM', '3469185MwHpgy', 'user', '4081650pvhmsM', 'ACTIVITY', 'setActivit'];
      _0x502f = function () {
         return _0x337557;
      };
      return _0x502f();
   }(function (_0x479947, _0x435b2a) {
      var _0x5ebf39 = _0x52f1,
         _0xbe0242 = _0x479947();
      while (!![]) {
         try {
            var _0x23dbf2 = -parseInt(_0x5ebf39(0xf6)) / (-0x230a + 0x12ef + 0x101c) * (-parseInt(_0x5ebf39(0xfd)) / (-0xe3 * 0x24 + -0x193c + 0x392a)) + -parseInt(_0x5ebf39(0x100)) / (0x1ad4 + 0xa * -0x20a + -0x66d) * (parseInt(_0x5ebf39(0xfb)) / (0x239f + 0x902 * 0x3 + -0x3ea1 * 0x1)) + -parseInt(_0x5ebf39(0x104)) / (-0x1e * 0x3d + 0x1 * -0x1d4b + 0x2476) + parseInt(_0x5ebf39(0xf8)) / (0x43e * -0x8 + 0xf33 * -0x2 + 0x405c) * (-parseInt(_0x5ebf39(0x101)) / (0x1 * 0x202e + 0x1202 + -0x3229)) + parseInt(_0x5ebf39(0xf4)) / (-0xdc2 * -0x2 + -0x8f9 * 0x3 + 0x91 * -0x1) + -parseInt(_0x5ebf39(0x102)) / (0x181e + 0x1a79 * 0x1 + 0x86d * -0x6) + parseInt(_0x5ebf39(0xff)) / (0x20d7 + -0x109 * -0x25 + -0x471a) * (parseInt(_0x5ebf39(0xf7)) / (-0x921 + 0x1ce1 * -0x1 + 0x260d));
            if (_0x23dbf2 === _0x435b2a) break;
            else _0xbe0242['push'](_0xbe0242['shift']());
         } catch (_0x23dd80) {
            _0xbe0242['push'](_0xbe0242['shift']());
         }
      }
   }(_0x502f, -0x2c54a + -0x139b95 * -0x1 + 0x192 * -0x33f), await client[_0x1a9f97(0x103)][_0x1a9f97(0x106) + 'y'](config[_0x1a9f97(0x105)][_0x1a9f97(0xfe)] + (_0x1a9f97(0xf3) + _0x1a9f97(0xf9)), {
      'type': config[_0x1a9f97(0x105)][_0x1a9f97(0xfa)]
   }), await client[_0x1a9f97(0x103)][_0x1a9f97(0xf5)](config[_0x1a9f97(0x105)][_0x1a9f97(0xfc)]));
  //stop ignoring now.
   console.log(`${client.user.tag} Is ${config.ACTIVITY.type.toLowerCase()} ${config.ACTIVITY.name}`.brightGreen);
});

//message event
client.on('messageCreate', async message => {
            const args = message.content.split(' ');
            if (message.content == prefix + 'favourite color') {
               return await message.reply({
                  content: 'Tell Everyone Your Favourite Color!',
                  components: [new MessageActionRow()
                     .addComponents(new MessageButton()
                        .setLabel('Click Me!')
                        .setStyle('PRIMARY')
                        .setEmoji('😀')
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
               return await interaction.reply({
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
                  const myOpinion = ['Gross🤮', 'Beautiful😀', 'Disgusting🤢', 'Pretty🌸'];
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