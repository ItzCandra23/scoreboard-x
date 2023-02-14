"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.send = void 0;
const name = "ScoreboardX";
/**Send message to player or console. */
var send;
(function (send) {
    /**Send error message. */
    function error(message, actor) {
        if (actor)
            actor.sendMessage(`§c${message.replace(/&r/g, "§r§a").replace(/&f/g, "§r")}`);
        else
            console.log(`[${name}] Error! ${message.replace(/&r/g, "").replace(/&f/g, "")}`.red);
    }
    send.error = error;
    /**Send success message. */
    function success(message, actor) {
        if (actor)
            actor.sendMessage(`§a${message.replace(/&r/g, "§r§a").replace(/&f/g, "§r")}`);
        else
            console.log(`[${name}] ${message.replace(/&r/g, "").replace(/&f/g, "")}`.green);
    }
    send.success = success;
    /**Send normal message. */
    function msg(message, actor) {
        if (actor)
            actor.sendMessage(message.replace(/&r/g, "§r").replace(/&f/g, "§r").replace(/&a/g, "§a").replace(/&e/g, "§e"));
        else
            console.log(`[${name}] ${message.replace(/&r/g, "").replace(/&f/g, "").replace(/&a/g, "").replace(/&e/g, "")}`);
    }
    send.msg = msg;
})(send = exports.send || (exports.send = {}));
/**Send message to player or console. */
class sendMessage {
    constructor(actor, message = true) {
        this.plugin = name;
        this.actor = actor;
        this.message = message;
    }
    /**Send error message. */
    error(message) {
        if (this.message) {
            if (this.actor)
                this.actor.sendMessage(`§c${message.replace(/&r/g, "§r§a").replace(/&f/g, "§r")}`);
            else
                console.log(`[${this.plugin}] Error! ${message.replace(/&r/g, "").replace(/&f/g, "")}`.red);
        }
    }
    /**Send success message. */
    success(message) {
        if (this.message) {
            if (this.actor)
                this.actor.sendMessage(`§a${message.replace(/&r/g, "§r§a").replace(/&f/g, "§r")}`);
            else
                console.log(`[${this.plugin}] ${message.replace(/&r/g, "").replace(/&f/g, "")}`.green);
        }
    }
    /**Send normal message. */
    msg(message) {
        if (this.message) {
            if (this.actor)
                this.actor.sendMessage(message.replace(/&r/g, "§r").replace(/&f/g, "§r").replace(/&a/g, "§a").replace(/&e/g, "§e"));
            else
                console.log(`[${this.plugin}] ${message.replace(/&r/g, "").replace(/&f/g, "").replace(/&a/g, "").replace(/&e/g, "")}`);
        }
    }
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDO0FBRTNCLHdDQUF3QztBQUN4QyxJQUFpQixJQUFJLENBa0JwQjtBQWxCRCxXQUFpQixJQUFJO0lBQ2pCLHlCQUF5QjtJQUN6QixTQUFnQixLQUFLLENBQUMsT0FBZSxFQUFFLEtBQW9CO1FBQ3ZELElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksWUFBWSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUhlLFVBQUssUUFHcEIsQ0FBQTtJQUVELDJCQUEyQjtJQUMzQixTQUFnQixPQUFPLENBQUMsT0FBZSxFQUFFLEtBQW9CO1FBQ3pELElBQUksS0FBSztZQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUhlLFlBQU8sVUFHdEIs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