import { Client, GatewayIntentBits } from "discord.js";
const intents = Object.values(GatewayIntentBits).filter(Number.isInteger);
export const client = new Client({ intents });