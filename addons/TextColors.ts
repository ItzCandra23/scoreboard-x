import { ServerPlayer } from "bdsx/bds/player";
import { AddonData } from "../src/addon";

export function getProcessedTags(player: ServerPlayer): AddonData[] {
    return [
        ["&1", "§1"],
        ["&2", "§2"],
        ["&3", "§3"],
        ["&4", "§4"],
        ["&5", "§5"],
        ["&6", "§6"],
        ["&7", "§7"],
        ["&8", "§8"],
        ["&9", "§9"],
        ["&0", "§0"],
        ["&a", "§a"],
        ["&b", "§b"],
        ["&c", "§c"],
        ["&d", "§d"],
        ["&e", "§e"],
        ["&f", "§f"],
        ["&g", "§g"],
        ["&h", "§k"],
        ["&l", "§l"],
        ["&m", "§m"],
        ["&n", "§n"],
        ["&o", "§o"],
        ["&k", "§k"],
        ["&r", "§r"],
    ];
}