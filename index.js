import { client } from "./src/client.js";
import { load } from "./src/utils/load.js";

await load("src/your-feature/index.js");

client.login(process.env.DISCORD_TOKEN);