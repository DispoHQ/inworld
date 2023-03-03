"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodejs_sdk_1 = require("@inworld/nodejs-sdk");
function sayHello() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new nodejs_sdk_1.InworldClient()
            // Get key and secret from the integrations page.
            .setApiKey({
            key: "6xxAAiwpi7KaewqNY3nEUib9BdWHKjtx",
            secret: "23u7F9wlDMT3ilEv26KxntXXpdrzwdCZcOC5YaJB9DxqaSMwgpY2NyPazoH0RafJ",
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
            .setOnError((err) => console.error(err))
            .setOnMessage((msg) => {
            console.log(msg);
            // Close connection.
            connection.close();
        });
        console.log("A1");
        // Finish connection configuration.
        const connection = client.build();
        console.log("A2");
        // Send your message to a character.
        yield connection.sendText("Hello");
    });
}
sayHello();
//# sourceMappingURL=index.js.map