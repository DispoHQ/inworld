import { InworldClient, InworldPacket } from "@inworld/nodejs-sdk";

async function sayHello() {
  const client = new InworldClient()
    // Get key and secret from the integrations page.
    .setApiKey({
      key: "KEY",
      secret: "SECRET",
    })
    // Setup a user name.
    // It allows character to call you by name.
    .setUser({ fullName: "Your name" })
    // Setup required capabilities.
    // In this case you can receive character emotions.
    .setConfiguration({
      capabilities: { emotions: true },
    })
    // Use a full character name.
    // It should be like workspaces/{WORKSPACE_NAME}/characters/{CHARACTER_NAME}.
    // Or like workspaces/{WORKSPACE_NAME}/scenes/{SCENE_NAME}.
    .setScene("workspaces/Dispo/characters/Juan")
    // Attach handlers
    .setOnError((err: Error) => console.error(err))
    .setOnMessage((msg: InworldPacket) => {
      console.log(msg);

      // Close connection.
      connection.close();
    });

  console.log("A1");

  // Finish connection configuration.
  const connection = client.build();

  console.log("A2");

  // Send your message to a character.
  await connection.sendText("Hello");
}

sayHello();
