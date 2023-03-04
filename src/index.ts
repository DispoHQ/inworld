import { InworldClient, InworldPacket } from "@inworld/nodejs-sdk";
import { question } from "cli-interact";

const leftClient = new InworldClient()
  .setApiKey({
    key: "6xxAAiwpi7KaewqNY3nEUib9BdWHKjtx",
    secret: "23u7F9wlDMT3ilEv26KxntXXpdrzwdCZcOC5YaJB9DxqaSMwgpY2NyPazoH0RafJ",
  })
  .setUser({ fullName: "SANJI" })
  .setConfiguration({
    capabilities: { emotions: true },
  })
  .setScene("workspaces/dispo/characters/juan")
  .setOnError((err: Error) => console.error(err))
  .setOnMessage(async (msg: InworldPacket) => {
    if (msg.text && msg.text.final) {
      console.log("JUAN:", msg.text.text);
      rightBot.sendText(msg.text.text);
    }
    if (msg.isInteractionEnd()) {
      console.log("JUAN: [Interaction Over]");
    }
  });
const leftBot = leftClient.build();

const rightClient = new InworldClient()
  .setApiKey({
    key: "6xxAAiwpi7KaewqNY3nEUib9BdWHKjtx",
    secret: "23u7F9wlDMT3ilEv26KxntXXpdrzwdCZcOC5YaJB9DxqaSMwgpY2NyPazoH0RafJ",
  })
  .setUser({ fullName: "JUAN" })
  .setConfiguration({
    capabilities: { emotions: true },
  })
  .setScene("workspaces/dispo/characters/guy")
  .setOnError((err: Error) => console.error(err))
  .setOnMessage(async (msg: InworldPacket) => {
    if (msg.text && msg.text.final) {
      console.log("SANJI:", msg.text.text);
      leftBot.sendText(msg.text.text);
    }
    if (msg.isInteractionEnd()) {
      console.log("SANJI: [Interaction Over]");
    }
  });
const rightBot = rightClient.build();

let text = question("?");
leftBot.sendText(text);
