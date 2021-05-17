import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class Hola extends Command {
    public constructor(){
        super("hola",{
            aliases: ["hola"],
            category: "Comandos públicos",
            description: {
                content: "Comando público para saludar.",
                usage: "hola",
                examples: [
                    "hola"
                ]
            },
            ratelimit: 3
        });
    }
    public exec(message: Message) {
        let user = message.member.displayName
        message.channel.send(`Hola ${user}! Te deseo un gran día!`);
    }
}