import DoorBase from "../doorBase";
import DragElement from "../dragElement";


/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */

export default class Door1 extends DoorBase {
    constructor(number, onUnlock) {
        super(number, onUnlock);

        const self = this;
        const lock = document.querySelector('.wall__lock');
        // первый барьер
        const barrier = new DragElement(document.querySelector('.wall__barrier'), (el) => {
            requestAnimationFrame(() => {
                el.style.transform = '';
            });
        });
        const key = new DragElement(document.querySelector('.wall__key'), (el) => {
            requestAnimationFrame(() => {
                var keyPosition = el.getBoundingClientRect();
                var lockPosition = lock.getBoundingClientRect();
                // ключ входит в пазы
                if (keyPosition.left > lockPosition.left &&
                    keyPosition.right < lockPosition.right &&
                    keyPosition.top > lockPosition.top &&
                    keyPosition.bottom < lockPosition.bottom) {
                    self.unlock()
                }
                el.style.transform = '';
            });
        })

    }
}
