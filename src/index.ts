import { InworldClient, InworldPacket } from "@inworld/nodejs-sdk";
import { question } from "cli-interact";

const leftClient = new InworldClient()
  .setApiKey({
    key: "6xxAAiwpi7KaewqNY3nEUib9BdWHKjtx",
    secret: "23u7F9wlDMT3ilEv26KxntXXpdrzwdCZcOC5YaJB9DxqaSMwgpY2NyPazoH0RafJ",
  })
  .setUser({ fullName: "JUDY" })
  .setClient({ id: "JUDY" })
  .setConfiguration({
    connection: { autoReconnect: false },
    capabilities: { emotions: true },
  })
  .setScene("workspaces/dispo/characters/judy")
  .setOnError((err: Error) => console.error(err))
  .setOnMessage(async (msg: InworldPacket) => {
    if (msg.text && msg.text.final) {
      console.log("JUDY:", msg.text.text);
      // console.log("FFF", rightBot);
      setTimeout(() => {
        sendRight(msg.text.text);
      });
    }
    if (msg.isInteractionEnd()) {
      console.log("JUDY: [Interaction Over]");
      // leftBot.close();
    }
  });
const leftBot = leftClient.build();

const rightClient = new InworldClient()
  // Get key and secret from the integrations page.
  .setApiKey({
    key: "6xxAAiwpi7KaewqNY3nEUib9BdWHKjtx",
    secret: "23u7F9wlDMT3ilEv26KxntXXpdrzwdCZcOC5YaJB9DxqaSMwgpY2NyPazoH0RafJ",
  })
  .setUser({ fullName: "JUAN" })
  .setClient({ id: "JUAN" })
  .setConfiguration({
    connection: { autoReconnect: false },
    capabilities: { emotions: true },
  })
  .setScene("workspaces/dispo/characters/juan")
  .setOnError((err: Error) => console.error(err))
  .setOnMessage(async (msg: InworldPacket) => {
    if (msg.text && msg.text.final) {
      console.log("JUAN:", msg.text.text);
      setTimeout(() => {
        sendLeft(msg.text.text);
      }, 1000);
    }
    if (msg.isInteractionEnd()) {
      console.log("JUAN: [Interaction Over]");
      // rightBot.close();
    }
  });
const rightBot = rightClient.build();

async function sendLeft(text: string) {
  // console.log(leftBot);
  try {
    if (!leftBot.isActive()) {
      await leftBot.open();
    }
  } catch {}
  await leftBot.sendText(text);
}

async function sendRight(text: string) {
  try {
    if (!rightBot.isActive()) {
      await rightBot.open();
    }
  } catch {}
  await rightBot.sendText(text);
}

let text = question("?");
sendRight(text);

// setTimeout(() => {
//   console.log("DONE");
//   // sendRight("Jack");
//   // sendLeft("What is up?");
//   // setTimeout(() => {
//   //   console.log("DONE2");
//   // }, 1000);
// }, 1000);
