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
}, src_1.ScoreboardX.getSpeed());
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
event_1.events.serverStop.on(() => clearInterval(intrval));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUFvQztBQUNwQywrQkFBb0M7QUFDcEMsaURBQTJDO0FBRTNDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO0FBRTNELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7SUFDN0IsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QyxpQkFBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsRUFBRSxpQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFM0IsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixjQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMifQ==