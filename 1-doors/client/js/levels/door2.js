import DoorBase from "../doorBase";

/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
export default class Door2 extends DoorBase {
    constructor(number, onUnlock) {
        super(number, onUnlock);

        var self = this,
            chain = document.querySelector('.drop__chain'),
            weight = document.querySelector('.drop__weight'),
            btn = document.querySelector('.drop__btn');

        chain.addEventListener('pointermove', onChainPointerMove);
        weight.addEventListener('pointerdown', onWeightPointerDown);

        function onChainPointerMove() {
            breakChain()
        }

        function onWeightPointerDown() {
            if (this.classList.contains('drop__weight_fell')) {
                self.unlock();
            }
        }

        function breakChain() {
            chain.classList.add('drop__chain_break');
            weight.classList.add('drop__weight_fell');
        }
    }
}
