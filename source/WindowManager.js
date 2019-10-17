const EventEmitter = require("events");
const blessed = require("blessed");

class WindowManager extends EventEmitter {
    constructor() {
        super();
        this.screen = blessed.screen({});
    }

    initialise() {
        this.screen.title = "Site Report";
    }
}

module.exports = WindowManager;
