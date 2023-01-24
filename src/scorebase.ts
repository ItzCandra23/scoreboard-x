import { ServerPlayer } from "bdsx/bds/player";
import { ScoreAddon } from "./addon";
import * as path from "path";
import * as fs from "fs";
import { send } from "..";

export type ScoreLine = [string, number];

export interface ScoreboardData {
    titles: string[];
    lines: ScoreLine[];
}

let config: {
    scoreboard: ScoreboardData;
} = {
    scoreboard: {
        titles: [
            "&k&lii&r&a&lScoreboardX&f&k&lii&r",
            "&k&lii&r&d&lScoreboardX&f&k&lii&r",
            "&k&lii&r&6&lScoreboardX&f&k&lii&r",
            "&k&lii&r&b&lScoreboardX&f&k&lii&r",
        ],
        lines: [
            ["                           ", 0],
            ["  Name: &a{name}", 1],
            ["  Item: &a{item_custom_name}", 2],
            ["  Count: &a{item_count}", 3],
            ["  Ping: &a{ping}", 4],
            ["  Online: &a{online}/{max_online}", 5],
            ["  Pos: &a{x}, {y}, {z}", 6],
            ["                          ", 7],
        ],
    },
};
let scoreboard = config.scoreboard;

/**Create a path for the file. */
const configPath = path.join(__dirname, "..", "config.json");

/**Trying to scan the file. */
try { config = require(configPath) } catch(err) {
    if (err) {
        send.error("config.json Failed to scan!");
    }
    else send.success("config.json Success to scan!");
}

export namespace ScoreboardX {
    /**Add a new title. */
    export function addTitle(title: string): void {
        scoreboard.titles.push(title);
    }

    /**Set title. */
    export function setTitle(title: string, index: number): boolean {
        if (index > scoreboard.titles.length-1||index < 0) return false;

        scoreboard.titles[index] = title;
        return true;
    }

    /**Get all scoreboard titles. */
    export function getTitles(): string[] {
        return scoreboard.titles;
    }

    /**Get random title. */
    export function getRandomTitle(player: ServerPlayer): string {
        const title = scoreboard.titles[Math.floor(Math.random() * scoreboard.titles.length)];
        let addons = ScoreAddon.getAddons(player);
        let newTitle: string = title;

        for (const [i, addon] of addons.entries()) {
            newTitle=newTitle.replace(new RegExp(addon[0], "g"), addon[1].toString());
        }

        return newTitle;
    }

    /**Add a new line. */
    export function addLine(line: ScoreLine): void {
        scoreboard.lines.push(line);
    }

    /**Set line. */
    export function setLine(line: ScoreLine, index: number): boolean {
        if (index > scoreboard.lines.length-1||index < 0) return false;

        scoreboard.lines[index] = line;
        return true;
    }

    /**Set all lines. */
    export function setLines(lines: ScoreLine[]): void {
        scoreboard.lines=lines;
    }

    /**Get all scoreboard lines. */
    export function getLines(player: ServerPlayer): ScoreLine[] {
        const data = new Map<number, ScoreLine>();
        let addons = ScoreAddon.getAddons(player);

        for (let [i, line] of scoreboard.lines.entries()) {
            for (const [i_, addon] of addons.entries()) {
                const newLine: ScoreLine = [line[0].replace(new RegExp(addon[0], "g"), addon[1].toString()), line[1]];
                if (data.has(i)) data.set(i, [data.get(i)![0].replace(new RegExp(addon[0], "g"), addon[1].toString()), data.get(i)![1]]);
                else data.set(i, newLine);
            }
        }

        let value: ScoreLine[] = [];
        data.forEach((line) => { value.push(line) });

        return value;
    }

    /**Hidden scoreboard. */
    export function setHide(player: ServerPlayer, value: boolean): boolean {
        if (value) {
            if (player.hasTag("scoreboard:hide")) return false;
            else player.addTag("scoreboard:hide");
            player.sendMessage("§2Scoreboard: §cHide");
            return true;
        } else {
            if (!player.hasTag("scoreboard:hide")) return false;
            else player.removeTag("scoreboard:hide");
            player.sendMessage("§2Scoreboard: §aShow");
            return true
        }
    }

    /**Send a scoreboard to player. */
    export function sendTo(player: ServerPlayer): void {
        if (player.hasTag("scoreboard:hide")) return;
        else player.setFakeScoreboard(getRandomTitle(player), getLines(player));
    }

    /**Save. */
    export function save(message: boolean = false, actor?: ServerPlayer): void {
        fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf8", (err) => {
            if (message) {
                if (err) {
                    send.error(`config.json Error! ${err}`, actor);
                    throw err;
                }
                else send.success("config.json Saved!", actor);
            }
        });
    }
}