"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const actor_1 = require("bdsx/bds/actor");
const player_1 = require("bdsx/bds/player");
const common_1 = require("bdsx/common");
const launcher_1 = require("bdsx/launcher");
function getProcessedTags(player) {
    return [
        ["{name}", player.getName()],
        ["{real_name}", player.getName()],
        ["{display_name}", player.getNameTag()],
        ["{gamemode}", player_1.GameType[player.getGameType()]],
        ["{platform}", common_1.BuildPlatform[player.getPlatform()]],
        ["{online}", launcher_1.bedrockServer.serverInstance.getActivePlayerCount()],
        ["{max_online}", launcher_1.bedrockServer.serverInstance.getMaxPlayers()],
        ["{item_name}", player.getMainhandSlot().getName()],
        ["{item_custom_name}", player.getMainhandSlot().getCustomName()],
        ["{item_id}", player.getMainhandSlot().getId()],
        ["{item_damage}", player.getMainhandSlot().getDamageValue()],
        ["{item_attack}", player.getMainhandSlot().getAttackDamage()],
        ["{item_count}", player.getMainhandSlot().getAmount()],
        ["{item_amount}", player.getMainhandSlot().getAmount()],
        ["{health}", player.getHealth()],
        ["{max_health}", player.getMaxHealth()],
        ["{x}", Math.floor(player.getFeetPos().x)],
        ["{y}", Math.floor(player.getFeetPos().y)],
        ["{z}", Math.floor(player.getFeetPos().z)],
        ["{dimension}", actor_1.DimensionId[player.getDimensionId()]],
        ["{ping}", launcher_1.bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address)],
        ["{xuid}", player.getXuid()],
        ["{server_version}", launcher_1.bedrockServer.serverInstance.getGameVersion().fullVersionString],
        ["{ip}", player.getNetworkIdentifier().getAddress()],
        ["{world_player_count}", launcher_1.bedrockServer.serverInstance.getPlayers().length],
        ["{motd}", launcher_1.bedrockServer.serverInstance.getMotd()],
    ];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBZGRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2ljQWRkb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQTZDO0FBQzdDLDRDQUF5RDtBQUN6RCx3Q0FBNEM7QUFDNUMsNENBQThDO0FBRzlDLFNBQWdCLGdCQUFnQixDQUFDLE1BQW9CO0lBQ2pELE9BQU87UUFDSCxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsWUFBWSxFQUFFLGlCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxZQUFZLEVBQUUsc0JBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLFVBQVUsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2pFLENBQUMsY0FBYyxFQUFFLHdCQUFhLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlELENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoRSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVELENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM3RCxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEQsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZELENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxhQUFhLEVBQUUsbUJBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLFFBQVEsRUFBRSx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLENBQUMsa0JBQWtCLEVBQUUsd0JBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDckYsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEQsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDMUUsQ0FBQyxRQUFRLEVBQUUsd0JBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDckQsQ0FBQztBQUNOLENBQUM7QUE3QkQsNENBNkJDIn0=