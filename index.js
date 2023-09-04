"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreboardX = void 0;
const addon_1 = require("./src/addon");
const message_1 = require("./src/utils/message");
const event_1 = require("bdsx/event");
const path = require("path");
const fs = require("fs");
const isHide = new Map();
const configPath = path.join(__dirname, "config.json");
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
    message_1.send.error(err);
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
event_1.events.serverOpen.on(() => {
    require("./src");
    require("./src/addon");
    require("./src/commands");
    message_1.send.success("Started!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBeUM7QUFDekMsaURBQTJDO0FBQzNDLHNDQUFvQztBQUNwQyw2QkFBNkI7QUFDN0IseUJBQXlCO0FBU3pCLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO0FBRTFDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZELElBQUksTUFBTSxHQUdOO0lBQ0EsS0FBSyxFQUFFLElBQUk7SUFDWCxVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7U0FDdEM7UUFDRCxLQUFLLEVBQUU7WUFDSCxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQztZQUN2QyxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztZQUMzQixDQUFDLHVDQUF1QyxFQUFFLENBQUMsQ0FBQztZQUM1QyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztZQUNqQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztTQUN6QjtLQUNKO0NBQ0osQ0FBQztBQUVGLElBQUk7SUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0NBQUU7QUFBQyxPQUFNLEdBQUcsRUFBRTtJQUM1QyxjQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25CO0FBRUQsSUFBaUIsV0FBVyxDQTRIM0I7QUE1SEQsV0FBaUIsV0FBVztJQUN4QixpQ0FBaUM7SUFDakMsU0FBZ0IsUUFBUSxDQUFDLEVBQVU7UUFD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