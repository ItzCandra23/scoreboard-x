import { Player } from "bdsx/bds/player";
import { ScoreAddon } from "./addon";
import { send } from "./utils/message";
import * as path from "path";
import * as fs from "fs";

export type ScoreLine = [string, number];

export interface ScoreboardData {
    titles: string[];
    lines: ScoreLine[];
}

const isHide = new Map<Player, boolean>();

const configPath = path.join(__dirname, "..", "config.json");
let config: {
    speed: number,
    scoreboard: ScoreboardData;
} = {
    speed: 1000,
    scoreboard: {
        titles: [
            "&k&lii&r&a&lScoreboardX&f&k&lii&r",
            "&k&lii&r&d&lScoreboardX&f&k&lii&r",
            "&k&lii&r&6&lScoreboardX&f&k&lii&r",
            "&k&lii&r&b&lScoreboardX&f&k&lii&r",
        ],
        lines: [
            ["===============&r", 0],
            ["&a‣ &rName: &a{name}", 1],
            ["&a‣ &rItem: &a{item_custom_name}", 2],
            ["&a‣ &rCount: &a{item_count}", 3],
            ["&a‣ &rPing: &a{ping}", 4],
            ["&a‣ &rOnline: &a{online}/{max_online}", 5],
            ["&a‣ &rPos: &a{x}, {y}, {z}", 6],
            ["===============", 7],
        ],
    },
};

try { config = require(configPath) } catch(err) { ScoreboardX.save() }

export namespace ScoreboardX {
    /**Set scoreboard change speed */
    export function setSpeed(ms: number): void {
        if (ms < 1) ms=500;
        config.speed=ms;
    }

    /**Get scoreboard change speed */
    export function getSpeed(): number {
        if (config.speed < 1) return 500;
        else return config.speed;
    }

    /**Add a new title. */
    export function addTitle(title: string): void {
        config.scoreboard.titles.push(title);
    }

    /**Set title. */
    export function setTitle(title: string, index: number): boolean {
        if (index > config.scoreboard.titles.length-1||index < 0) return false;

        config.scoreboard.titles[index] = title;
        return true;
    }

    /**Get all scoreboard titles. */
    export function getTitles(): string[] {
        return config.scoreboard.titles;
    }

    /**Get random title. */
    export function getRandomTitle(player: Player): string {
        const title = config.scoreboard.titles[Math.floor(Math.random() * config.scoreboard.titles.length)];
        let addons = ScoreAddon.getAddons(player);
        let newTitle: string = title;

        for (const [i, addon] of addons.entries()) {
            newTitle=newTitle.replace(new RegExp(addon[0], "g"), addon[1].toString());
        }

        return newTitle;
    }

    /**Add a new line. */
    export function addLine(line: ScoreLine): void {
        config.scoreboard.lines.push(line);
    }

    /**Set line. */
    export function setLine(line: ScoreLine, index: number): boolean {
        if (index > config.scoreboard.lines.length-1||index < 0) return false;

        config.scoreboard.lines[index] = line;
        return true;
    }

    /**Set all lines. */
    export function setLines(lines: ScoreLine[]): void {
        config.scoreboard.lines=lines;
    }

    /**Get all scoreboard lines. */
    export function getLines(player: Player): ScoreLine[] {
        const data = new Map<number, ScoreLine>();
        let addons = ScoreAddon.getAddons(player);

        for (let [i, line] of config.scoreboard.lines.entries()) {
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

    /**Is hide scoreboard. */
    export function isHidden(player: Player): boolean {
        const value = isHide.get(player);
        if (value === undefined) return false;
        return value;
    }

    /**Hidden scoreboard. */
    export function setHide(player: Player, value: boolean): boolean {
        if (value) {
            if (isHidden(player)) return false;
            else isHide.set(player, true);
            player.sendMessage("§2Scoreboard: §cHide");
            return true;
        } else {
            if (!isHidden(player)) return false;
            else isHide.set(player, false);
            player.sendMessage("§2Scoreboard: §aShow");
            return true
        }
    }

    /**Send a scoreboard to player. */
    export function sendTo(player: Player): void {
        if (isHidden(player)) {
            player.removeFakeScoreboard();
            return;
        }
        player.setFakeScoreboard(getRandomTitle(player), getLines(player));
    }

    /**Save. */
    export function save(message: boolean = false): void {
        fs.writeFile(configPath, JSON.stringify(config, null, 4), "utf8", (err) => {
            if (message) {
                if (err) {
                    send.error(`config.json ${err}`);
                    throw err;
                }
                else send.success("config.json Saved!");
            }
        });
    }
}
