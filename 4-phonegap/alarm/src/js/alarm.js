import Store from './store'
import Signal from './signal'
import QuickAdd from './quickAdd'

export default class Alarm {
    constructor() {
        const $header = document.querySelector('.alarm__header');
        const $body = document.querySelector('.alarm__body');

        this.store = new Store();

        const signals = this.initSignals(this.store.signals);
        const quickAdd = this.initQuickAdd(this.store.times);

        $header.appendChild(quickAdd);
        $body.appendChild(signals);
    }
    initQuickAdd(times) {
        const el = document.createElement('div');
        el.className = 'alarm__add';
        // times.map(data => {
            const instanse = new QuickAdd;
            el.appendChild(instanse.render())
        // });
        return el;
    }
    initSignals(signals) {
        const el = document.createElement('div');
        el.className = 'alarm__signal';
        signals.map(data => {
            const instanse = new Signal;
            el.appendChild(instanse.render(data))
        });
        return el;
    }
}
