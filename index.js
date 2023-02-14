"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const src_1 = require("./src");
const message_1 = require("./src/utils/message");
const players = new Map();
const intrval = setInterval(() => {
    for (const [netId, player] of players.entries()) {
        src_1.ScoreboardX.sendTo(player);
    }
}, 1000);
event_1.events.playerJoin.on((ev) => {
    players.set(ev.player.getNetworkIdentifier(), ev.player);
});
event_1.events.playerLeft.on((ev) => {
    players.delete(ev.player.getNetworkIdentifier());
});
event_1.events.serverOpen.on(() => {
    require("./src");
    require("./src/addon");
    require("./src/commands");
    message_1.send.success("Started!");
});
event_1.events.serverClose.on(() => {
    clearInterval(intrval);
    src_1.ScoreboardX.save();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFvQztBQUNwQywrQkFBb0M7QUFDcEMsaURBQTJDO0FBRTNDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO0FBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7SUFDN0IsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QyxpQkFBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVULGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsaUJBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyJ9