import path from "node:path";
import { pathToFileURL } from "node:url";
import { client } from "../client.js";

export async function load(file) {
  const url = pathToFileURL(path.resolve(file)).href;
  const mod = await import(url);

  if (typeof mod.default !== "function") {
    throw new Error(`${file} must export a default function`);
  }

  await mod.default(client);
  console.log(`✅ Loaded ${file}`);
}