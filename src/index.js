"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreboardX = void 0;
const addon_1 = require("./addon");
const message_1 = require("./utils/message");
const path = require("path");
const fs = require("fs");
const configPath = path.join(__dirname, "..", "config.json");
let config = {
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
try {
    config = require(configPath);
}
catch (err) { }
var ScoreboardX;
(function (ScoreboardX) {
    /**Add a new title. */
    function addTitle(title) {
        scoreboard.titles.push(title);
    }
    ScoreboardX.addTitle = addTitle;
    /**Set title. */
    function setTitle(title, index) {
        if (index > scoreboard.titles.length - 1 || index < 0)
            return false;
        scoreboard.titles[index] = title;
        return true;
    }
    ScoreboardX.setTitle = setTitle;
    /**Get all scoreboard titles. */
    function getTitles() {
        return scoreboard.titles;
    }
    ScoreboardX.getTitles = getTitles;
    /**Get random title. */
    function getRandomTitle(player) {
        const title = scoreboard.titles[Math.floor(Math.random() * scoreboard.titles.length)];
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
        scoreboard.lines.push(line);
    }
    ScoreboardX.addLine = addLine;
    /**Set line. */
    function setLine(line, index) {
        if (index > scoreboard.lines.length - 1 || index < 0)
            return false;
        scoreboard.lines[index] = line;
        return true;
    }
    ScoreboardX.setLine = setLine;
    /**Set all lines. */
    function setLines(lines) {
        scoreboard.lines = lines;
    }
    ScoreboardX.setLines = setLines;
    /**Get all scoreboard lines. */
    function getLines(player) {
        const data = new Map();
        let addons = addon_1.ScoreAddon.getAddons(player);
        for (let [i, line] of scoreboard.lines.entries()) {
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
    /**Hidden scoreboard. */
    function setHide(player, value) {
        if (value) {
            if (player.hasTag("scoreboard:hide"))
                return false;
            else
                player.addTag("scoreboard:hide");
            player.sendMessage("§2Scoreboard: §cHide");
            return true;
        }
        else {
            if (!player.hasTag("scoreboard:hide"))
                return false;
            else
                player.removeTag("scoreboard:hide");
            player.sendMessage("§2Scoreboard: §aShow");
            return true;
        }
    }
    ScoreboardX.setHide = setHide;
    /**Send a scoreboard to player. */
    function sendTo(player) {
        if (player.hasTag("scoreboard:hide"))
            return;
        else
            player.setFakeScoreboard(getRandomTitle(player), getLines(player));
    }
    ScoreboardX.sendTo = sendTo;
    /**Save. */
    function save(message = false, actor) {
        fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf8", (err) => {
            if (message) {
                if (err) {
                    message_1.send.error(`config.json ${err}`, actor);
                    throw err;
                }
                else
                    message_1.send.success("config.json Saved!", actor);
            }
        });
    }
    ScoreboardX.save = save;
})(ScoreboardX = exports.ScoreboardX || (exports.ScoreboardX = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBcUM7QUFDckMsNkNBQXVDO0FBQ3ZDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFTekIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzdELElBQUksTUFBTSxHQUVOO0lBQ0EsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1NBQ3RDO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7WUFDN0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7U0FDcEM7S0FDSjtDQUNKLENBQUM7QUFDRixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBRW5DLElBQUk7SUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0NBQUU7QUFBQyxPQUFNLEdBQUcsRUFBRSxHQUFFO0FBRWxELElBQWlCLFdBQVcsQ0FzRzNCO0FBdEdELFdBQWlCLFdBQVc7SUFDeEIsc0JBQXNCO0lBQ3RCLFNBQWdCLFFBQVEsQ0FBQyxLQUFhO1FBQ2xDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFGZSxv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