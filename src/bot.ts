import { config } from "dotenv";
config();
import { Client, Message } from "discord.js";
const client = new Client();
import { prefix } from "./config.json";


client.on('ready', ()=>{
    console.log("Bot en linea y listo para la acción!!")
});

client.on('message', async(message: Message) =>{
    console.log(message.content);

    if (message.content.startsWith(`${prefix}guitar`)) {
        console.log("pong");
        message.channel.send("🎸 Yeah!! :metal:")
    }
    //KICKEAR USER
    if (message.content.startsWith(`${prefix}kick`)) {
        const member = message.mentions.members?.first();
        if (member){
            const kickedUser= await member.kick();
            message.channel.send(`Will, ${kickedUser.user.username} ha sido expulsado!`)
        }
    }

});


client.login(process.env.BOT_TKN);