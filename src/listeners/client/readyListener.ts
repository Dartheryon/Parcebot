import { Listener } from "discord-akairo";

export default class Ready extends Listener {
    public constructor(){
    super("ready",{
        emitter: "client",
        event: "ready",
        category: "client"
    });
    }
    public exec(): void {
        console.log(`${this.client.user.tag} está en línea y listo!`);
    }
}