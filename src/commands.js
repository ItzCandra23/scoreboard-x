"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const _1 = require(".");
const message_1 = require("./utils/message");
command_1.command.register("scorex", "Show or hide your scoreboard.")
    .overload((p, o) => {
    const player = o.getEntity();
    if (!player) {
        message_1.send.error(`This command not for console`);
        return;
    }
    if (!player.isPlayer())
        return;
    if (p.mode === "hide")
        _1.ScoreboardX.setHide(player, true);
    if (p.mode === "show")
        _1.ScoreboardX.setHide(player, false);
}, {
    mode: command_1.command.enum("ScoreboardX", "hide", "show"),
});
command_1.command.register("sbx", "Show or hide your scoreboard.")
    .overload((p, o) => {
    const player = o.getEntity();
    if (!player) {
        message_1.send.error(`This command not for console`);
        return;
    }
    if (!player.isPlayer())
        return;
    if (p.mode === "hide")
        _1.ScoreboardX.setHide(player, true);
    if (p.mode === "show")
        _1.ScoreboardX.setHide(player, false);
}, {
    mode: command_1.command.enum("ScoreboardX", "hide", "show"),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1QztBQUN2Qyx3QkFBZ0M7QUFDaEMsNkNBQW9EO0FBSXBELGlCQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSwrQkFBK0IsQ0FBQztLQUMxRCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDZixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFN0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNULGNBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMzQyxPQUFPO0tBQ1Y7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUFFLE9BQU87SUFFL0IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07UUFBRSxjQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTTtRQUFFLGNBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlELENBQUMsRUFBRTtJQUNDLElBQUksRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztDQUNwRCxDQUFDLENBQUM7QUFFSCxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsK0JBQStCLENBQUM7S0FDdkQsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRTdCLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDVCxjQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDM0MsT0FBTztLQUNWO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFBRSxPQUFPO0lBRS9CLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNO1FBQUUsY0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07UUFBRSxjQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5RCxDQUFDLEVBQUU7SUFDQyxJQUFJLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7Q0FDcEQsQ0FBQyxDQUFDIn0=