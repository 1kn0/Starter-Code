# Starter Code

Drop-in cog loader for discord.js. Keep index.js clean and load features with one line.


## Install

```bash
npm install
```

Create a `.env` file:

```
DISCORD_TOKEN=your_bot_token_here
```

## Usage

```js
import { client } from "./src/client.js";
import { load } from "./src/utils/load.js";

await load("src/your-feature/index.js");

client.login(process.env.DISCORD_TOKEN);
```

Each loaded file only needs to export a default function. It receives the client:

```js
export default function (client) {
  // use client here: events, commands, anything
}
```

## How it works

`load(file)`:

1. Resolves the file path
2. Imports it
3. Calls its default export with the shared `client`
4. Logs when it's loaded

Add or remove features by adding or removing `load()` lines. Nothing else changes.

## Using it in your own project

Copy `src/utils/load.js` and `src/client.js`, then call `load()` from your entry file. It has no dependencies beyond discord.js.

## Requirements

- Node.js 20.6+
- discord.js 14
