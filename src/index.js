"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreboardX = void 0;
const addon_1 = require("./addon");
const message_1 = require("./utils/message");
const path = require("path");
const fs = require("fs");
const isHide = new Map();
const configPath = path.join(__dirname, "..", "config.json");
let config = {
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
try {
    config = require(configPath);
}
catch (err) {
    ScoreboardX.save();
}
var ScoreboardX;
(function (ScoreboardX) {
    /**Set scoreboard change speed */
    function setSpeed(ms) {
        if (ms < 1)
            ms = 500;
        config.speed = ms;
    }
    ScoreboardX.setSpeed = setSpeed;
    /**Get scoreboard change speed */
    function getSpeed() {
        if (config.speed < 1)
            return 500;
        else
            return config.speed;
    }
    ScoreboardX.getSpeed = getSpeed;
    /**Add a new title. */
    function addTitle(title) {
        config.scoreboard.titles.push(title);
    }
    ScoreboardX.addTitle = addTitle;
    /**Set title. */
    function setTitle(title, index) {
        if (index > config.scoreboard.titles.length - 1 || index < 0)
            return false;
        config.scoreboard.titles[index] = title;
        return true;
    }
    ScoreboardX.setTitle = setTitle;
    /**Get all scoreboard titles. */
    function getTitles() {
        return config.scoreboard.titles;
    }
    ScoreboardX.getTitles = getTitles;
    /**Get random title. */
    function getRandomTitle(player) {
        const title = config.scoreboard.titles[Math.floor(Math.random() * config.scoreboard.titles.length)];
        let addons = addon_1.ScoreAddon.getAddons(player);
        let newTitle = title;
        for (const [i, addon] of addons.entries()) {
            newTitle = newTitle.replace(new RegExp(addon[0], "g"), addon[1].toString());
        }
        return newTitle;
    }
    ScoreboardX.getRandomTitle = getRandomTitle;
    /**Add a new line. */
    function addLine(line) {
        config.scoreboard.lines.push(line);
    }
    ScoreboardX.addLine = addLine;
    /**Set line. */
    function setLine(line, index) {
        if (index > config.scoreboard.lines.length - 1 || index < 0)
            return false;
        config.scoreboard.lines[index] = line;
        return true;
    }
    ScoreboardX.setLine = setLine;
    /**Set all lines. */
    function setLines(lines) {
        config.scoreboard.lines = lines;
    }
    ScoreboardX.setLines = setLines;
    /**Get all scoreboard lines. */
    function getLines(player) {
        const data = new Map();
        let addons = addon_1.ScoreAddon.getAddons(player);
        for (let [i, line] of config.scoreboard.lines.entries()) {
            for (const [i_, addon] of addons.entries()) {
                const newLine = [line[0].replace(new RegExp(addon[0], "g"), addon[1].toString()), line[1]];
                if (data.has(i))
                    data.set(i, [data.get(i)[0].replace(new RegExp(addon[0], "g"), addon[1].toString()), data.get(i)[1]]);
                else
                    data.set(i, newLine);
            }
        }
        let value = [];
        data.forEach((line) => { value.push(line); });
        return value;
    }
    ScoreboardX.getLines = getLines;
    /**Is hide scoreboard. */
    function isHidden(player) {
        const value = isHide.get(player);
        if (value === undefined)
            return false;
        return value;
    }
    ScoreboardX.isHidden = isHidden;
    /**Hidden scoreboard. */
    function setHide(player, value) {
        if (value) {
            if (isHidden(player))
                return false;
            else
                isHide.set(player, true);
            player.sendMessage("§2Scoreboard: §cHide");
            return true;
        }
        else {
            if (!isHidden(player))
                return false;
            else
                isHide.set(player, false);
            player.sendMessage("§2Scoreboard: §aShow");
            return true;
        }
    }
    ScoreboardX.setHide = setHide;
    /**Send a scoreboard to player. */
    function sendTo(player) {
        if (isHidden(player)) {
            player.removeFakeScoreboard();
            return;
        }
        player.setFakeScoreboard(getRandomTitle(player), getLines(player));
    }
    ScoreboardX.sendTo = sendTo;
    /**Save. */
    function save(message = false) {
        fs.writeFile(configPath, JSON.stringify(config, null, 4), "utf8", (err) => {
            if (message) {
                if (err) {
                    message_1.send.error(`config.json ${err}`);
                    throw err;
                }
                else
                    message_1.send.success("config.json Saved!");
            }
        });
    }
    ScoreboardX.save = save;
})(ScoreboardX = exports.ScoreboardX || (exports.ScoreboardX = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBcUM7QUFDckMsNkNBQXVDO0FBQ3ZDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFTekIsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7QUFFMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzdELElBQUksTUFBTSxHQUdOO0lBQ0EsS0FBSyxFQUFFLElBQUk7SUFDWCxVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7U0FDdEM7UUFDRCxLQUFLLEVBQUU7WUFDSCxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQztZQUM1QyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUN6QjtLQUNKO0NBQ0osQ0FBQztBQUVGLElBQUk7SUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0NBQUU7QUFBQyxPQUFNLEdBQUcsRUFBRTtJQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtDQUFFO0FBRXRFLElBQWlCLFdBQVcsQ0E0SDNCO0FBNUhELFdBQWlCLFdBQVc7SUFDeEIsaUNBQWlDO0lBQ2pDLFNBQWdCLFFBQVEsQ0FBQyxFQUFVO1FBQy9CLElBQUksRUFBRSxH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