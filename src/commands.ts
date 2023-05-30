import { command } from "bdsx/command";
import { ScoreboardX } from ".";
import { send, sendMessage } from "./utils/message";
import { CommandPermissionLevel } from "bdsx/bds/command";
import { int32_t } from "bdsx/nativetype";

command.register("scorex", "Show or hide your scoreboard.")
.overload((p, o) => {
    const player = o.getEntity();

    if (!player) {
        send.error(`This command not for console`);
        return;
    }
    if (!player.isPlayer()) return;

    if (p.mode === "hide") ScoreboardX.setHide(player, true);
    if (p.mode === "show") ScoreboardX.setHide(player, false);
}, {
    mode: command.enum("ScoreboardX", "hide", "show"),
});

command.register("sbx", "Show or hide your scoreboard.")
.overload((p, o) => {
    const player = o.getEntity();

    if (!player) {
        send.error(`This command not for console`);
        return;
    }
    if (!player.isPlayer()) return;

    if (p.mode === "hide") ScoreboardX.setHide(player, true);
    if (p.mode === "show") ScoreboardX.setHide(player, false);
}, {
    mode: command.enum("ScoreboardX", "hide", "show"),
});