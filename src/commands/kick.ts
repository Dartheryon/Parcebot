import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class Kick extends Command {
    public constructor(){
        super("kick",{
            aliases: ["kick"],
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
    public async exec(message: Message) {
        const cmdUser = message.member;
        const member = message.mentions.members?.first();
        message.channel.send(`El usuario que ejecutó el comando fue ${cmdUser.displayName}. El usuario a expulsar es ${member.displayName}.`);
        if(member){
            const kickedUser = await member.kick();
            message.channel.send(`El usuario ${member.displayName} ha sido expulsado.`)
        }

    }
}