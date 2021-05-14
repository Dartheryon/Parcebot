import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
    public constructor(){
        super("ping",{
            aliases: ["ping"],
            category: "Comandos públicos",
            description: {
                content: "Comando público para hacer ping al server.",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    public exec(message: Message): Promise<Message> {
        return message.util.send(`Gatis, El ping es: \`${this.client.ws.ping}ms\``);
    }
}