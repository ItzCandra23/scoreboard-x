import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { ScoreboardX } from "./scorebase";
require("./scorebase");
require("./addon");

const players = new Map<NetworkIdentifier, ServerPlayer>();

events.playerJoin.on((ev) => {
    players.set(ev.player.getNetworkIdentifier(), ev.player);
});

events.playerLeft.on((ev) => {
    players.delete(ev.player.getNetworkIdentifier());
});

const intrval = setInterval(() => {
    for (const [netId, player] of players.entries()) {
        ScoreboardX.sendTo(player);
    }
}, 1000);

events.serverClose.on(() => {
    clearInterval(intrval);
    ScoreboardX.save();
});

command.register("scorex", "Show or hide your scoreboard.")
.overload((p, o) => {
    const player = o.getEntity() as ServerPlayer;

    if (p.mode === "hide") ScoreboardX.setHide(player, true);
    if (p.mode === "show") ScoreboardX.setHide(player, false);
}, {
    mode: command.enum("ScoreboardX", "hide", "show"),
});

command.register("sbx", "Show or hide your scoreboard.")
.overload((p, o) => {
    const player = o.getEntity() as ServerPlayer;

    if (p.mode === "hide") ScoreboardX.setHide(player, true);
    if (p.mode === "show") ScoreboardX.setHide(player, false);
}, {
    mode: command.enum("ScoreboardX", "hide", "show"),
});