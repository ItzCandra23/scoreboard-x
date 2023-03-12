import { DimensionId } from "bdsx/bds/actor";
import { GameType, ServerPlayer } from "bdsx/bds/player";
import { BuildPlatform } from "bdsx/common";
import { bedrockServer } from "bdsx/launcher";
import { AddonData } from "../src/addon";

export function getProcessedTags(player: ServerPlayer): AddonData[] {
    return [
        ["{name}", player.getName()],
        ["{real_name}", player.getName()],
        ["{display_name}", player.getNameTag()],
        ["{gamemode}", GameType[player.getGameType()]],
        ["{platform}", BuildPlatform[player.getPlatform()]],
        ["{online}", bedrockServer.serverInstance.getActivePlayerCount()],
        ["{max_online}", bedrockServer.serverInstance.getMaxPlayers()],
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
        ["{dimension}", DimensionId[player.getDimensionId()]],
        ["{ping}", bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address)],
        ["{xuid}", player.getXuid()],
        ["{server_version}", bedrockServer.serverInstance.getGameVersion().fullVersionString],
        ["{ip}", player.getNetworkIdentifier().getAddress()],
        ["{world_player_count}", bedrockServer.serverInstance.getPlayers().length],
        ["{motd}", bedrockServer.serverInstance.getMotd()],
    ];
}
