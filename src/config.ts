import { config } from "dotenv";
config();

export let token:string = process.env.BOT_TKN;
export let prefix:string = "!";
export let owners:string[] = ["SOME_ID"]