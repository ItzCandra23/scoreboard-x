import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { Player } from "bdsx/bds/player";
import { ScoreboardX } from "..";
import { events } from "bdsx/event";

const players = new Map<NetworkIdentifier, Player>();

const intrval = setInterval(() => {
    const players_ = Array.from(players.entries());
    for (let i = 0; i < players_.length; i++) {
        const [netId, player] = players_[i];
        ScoreboardX.sendTo(player);
    }
}, ScoreboardX.getSpeed());

events.playerJoin.on((ev) => {
    players.set(ev.player.getNetworkIdentifier(), ev.player);
});

events.playerLeft.on((ev) => {
    players.delete(ev.player.getNetworkIdentifier());
});

events.serverStop.on(() => {
    clearInterval(intrval);
});