"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomScoreAddon = exports.ScoreAddon = void 0;
const fs = require("fs");
const path = require("path");
var ScoreAddon;
(function (ScoreAddon) {
    function getAddonFiles() {
        let file_names = [];
        const folderPath = path.join(__dirname, "..", "addons");
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
            if (file.endsWith(".js")) {
                if (!file_names.includes(file))
                    file_names.push(file);
            }
        });
        return file_names;
    }
    ScoreAddon.getAddonFiles = getAddonFiles;
    function getAddons(player) {
        const files = getAddonFiles();
        let data = [];
        files.forEach((addon) => {
            require("../addons/" + addon).getProcessedTags(player).forEach((v) => {
                if (data.includes(v))
                    console.log(`${v}: Already!`);
                else {
                    data.push(v);
                }
            });
        });
        return data;
    }
    ScoreAddon.getAddons = getAddons;
})(ScoreAddon = exports.ScoreAddon || (exports.ScoreAddon = {}));
class CustomScoreAddon {
    static create(name) {
        if (name.includes(".") || name.includes(" "))
            return false;
        const addonPath = path.join(__dirname, "..", "addons");
        const addons = fs.readdirSync(addonPath);
        if (addons.includes(name))
            return false;
        const script = `
        import { ServerPlayer } from "bdsx/bds/player";
        import { AddonData } from "../src/addon";

        export function getProcessedTags(player: ServerPlayer): AddonData[] {
            return [
                //Hey, u can edit in here!
                //Example: ["{Hello}", "Hii"],
            ];
        }`;
        const newAddonPath = path.join(__dirname, "..", "addons", name + ".ts");
        fs.writeFileSync(newAddonPath, script, "utf-8");
        return true;
    }
}
exports.CustomScoreAddon = CustomScoreAddon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBSTdCLElBQWlCLFVBQVUsQ0E2QjFCO0FBN0JELFdBQWlCLFVBQVU7SUFDdkIsU0FBZ0IsYUFBYTtRQUN6QixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFFOUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFaZSx3QkFBYSxnQkFZNUIsQ0FBQTtJQUNELFNBQWdCLFNBQVMsQ0FBQyxNQUFvQjtRQUMxQyxNQUFNLEtBQUssR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO1FBRTNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixPQUFPLENBQUMsWUFBWSxHQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDL0M7b0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWRlLG9CQUFTLFlBY3hCLENBQUE7QUFDTCxDQUFDLEVBN0JnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQTZCMUI7QUFFRCxNQUFhLGdCQUFnQjtJQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRXhDLE1BQU0sTUFBTSxHQUFHOzs7Ozs7Ozs7VUFTYixDQUFDO1FBRUgsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQXhCRCw0Q0F3QkMifQ==