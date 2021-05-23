import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class Kick extends Command {
    public constructor(){
        super('kick',{
            aliases: ['kick'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                }
            ],
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions:['KICK_MEMBERS'],
            channel: "guild",
            category: "Comandos de moderación",
            description: {
                content: "Comando para expulsar usuarios.",
                usage: "kick '@user'",
                examples: [
                    "kick user"
                ]
            },
            ratelimit: 3
        });
    }
    public async exec(message: Message, args) {
        if (!args.member) {
            return message.reply('No se encontró nadie con ese nombre.')
        }
        
        /* const cmdUser = message.member;
        const member = message.mentions.members?.first();
        message.channel.send(`El usuario que ejecutó el comando fue ${cmdUser.displayName}. El usuario a expulsar es ${member.displayName}.`); */

        //const kickedUser = await member.kick();
        //message.channel.send(`El usuario ${member.displayName} ha sido expulsado.`);
            
        //expulsar el miembro.
        await args.member.kick()
    }
}
