import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";
import { ScoreboardX } from "./src";
import { send } from "./src/utils/message";

const players = new Map<NetworkIdentifier, ServerPlayer>();

const intrval = setInterval(() => {
    for (const [netId, player] of players.entries()) {
        ScoreboardX.sendTo(player);
    }
}, ScoreboardX.getSpeed());

events.playerJoin.on((ev) => {
    players.set(ev.player.getNetworkIdentifier(), ev.player);
});

events.playerLeft.on((ev) => {
    players.delete(ev.player.getNetworkIdentifier());
});

events.serverOpen.on(() => {
    require("./src");
    require("./src/addon");
    require("./src/commands");
    send.success("Started!");
});

events.serverStop.on(() => clearInterval(intrval));