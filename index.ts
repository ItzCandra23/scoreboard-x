import { ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";

/**Send a message to Player or Console. */
export namespace send {
    /**Send error message. */
    export function error(message: string, actor?: ServerPlayer): void {
        if (actor) actor.sendMessage(`§c${message.replace(/&e/g, "§e").replace(/&7/g, "§7").replace(/&r/g, "§r§c").replace(/&/g, "§")}`);
        else console.log(`[Scoreboard-X] Error! ${message.replace(/&e/g, "").replace(/&7/g, "").replace(/&r/g, "").replace(/&/g, "")}`);
    }
    /**Send error message. */
    export function success(message: string, actor?: ServerPlayer): void {
        if (actor) actor.sendMessage(`§a${message.replace(/&e/g, "§e").replace(/&7/g, "§7").replace(/&r/g, "§r§a").replace(/&/g, "§")}`);
        else console.log(`[Scoreboard-X] ${message.replace(/&e/g, "").replace(/&7/g, "").replace(/&r/g, "").replace(/&/g, "")}`);
    }
    /**Send error message. */
    export function msg(message: string, actor?: ServerPlayer): void {
        if (actor) actor.sendMessage(`${message.replace(/&/g, "§")}`);
        else console.log(`[Scoreboard-X] ${message.replace(/&e/g, "").replace(/&7/g, "").replace(/&r/g, "").replace(/&/g, "")}`);
    }
}

events.serverOpen.on(() => {
    require("./src");
    send.success("Started!");
});