import { ServerPlayer } from "bdsx/bds/player";
import * as fs from "fs";
import * as path from "path";

export type AddonData = [string, number|string];

export namespace ScoreAddon {
    export function getAddonFiles(): string[] {
        let file_names: string[] = [];

        const folderPath = path.join(__dirname, "..", "addons");
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
            if (file.endsWith(".js")) {
                if (!file_names.includes(file)) file_names.push(file);
            }
        });

        return file_names;
    }
    export function getAddons(player: ServerPlayer): AddonData[] {
        const files = getAddonFiles();
        let data: AddonData[] = [];

        files.forEach((addon) => {
            (require("../addons/"+addon).getProcessedTags(player) as AddonData[]).forEach((v) => {
                if (data.includes(v)) console.log(`${v}: Already!`);
                else {
                    data.push(v);
                }
            });
        });

        return data;
    }
}

export class CustomScoreAddon {
    static create(name: string): boolean {
        if (name.includes(".")||name.includes(" ")) return false;

        const addonPath = path.join(__dirname, "..", "addons");
        const addons = fs.readdirSync(addonPath);

        if (addons.includes(name)) return false;

        const script = `
        import { ServerPlayer } from "bdsx/bds/player";
        import { AddonData } from "../src/addon";

        export function getProcessedTags(player: ServerPlayer): AddonData[] {
            return [
                //Hey, u can edit in here!
                //Example: ["{Hello}", "Hii"],
            ];
        }`;

        const newAddonPath = path.join(__dirname, "..", "addons", name+".ts");
        fs.writeFileSync(newAddonPath, script, "utf-8");
        return true;
    }
}