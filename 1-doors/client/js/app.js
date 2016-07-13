import pepjs from './bower/pepjs/dist/pep.min.js';
import Door0 from "./levels/door0.js";
import Door1 from "./levels/door1.js";
import Door2 from "./levels/door2.js";
import Box from "./levels/box.js";

/**
 * @class App
 * @param {Element} el
 */
class App {
    constructor(el) {
        const appEl = el,
            doors = [
                new Door0(0, onUnlock),
                new Door1(1, onUnlock),
                new Door2(2, onUnlock),
                new Box(3, onUnlock)
            ];

        this.doors = doors;

        /**
         * Callback вызывается в коде двери
         * Тут даем возможность открыть следующие двери
         */
        function onUnlock() {
            var previousUnlocked;

            // Даем открыть следующую дверь
            for (let i = 0; i < doors.length; i++) {
                if (!doors[i].isLocked) {
                    previousUnlocked = true;
                } else {
                    if (previousUnlocked && doors[i].isLocked) {
                        doors[i].enable();
                        break;
                    }
                }
            }
        };
    }
}

// Start the app
const app = new App(document.querySelector('.app'));
