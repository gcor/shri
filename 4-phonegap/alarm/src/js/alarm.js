import Store from './store'
import Signal from './signal'
import QuickAdd from './quickAdd'

export default class Alarm {
    constructor() {
        const $header = document.querySelector('.alarm__header');
        const $body = document.querySelector('.alarm__body');

        const signals = this.initSignals();
        const quickAdd = this.initQuickAdd();

        $header.appendChild(quickAdd);
        $body.appendChild(signals);
    }
    initQuickAdd(times) {
        const el = document.createElement('div');
        el.className = 'alarm__add';
        const instanse = new QuickAdd;
        el.appendChild(instanse.render())
        return el;
    }
    initSignals() {
        const store = new Store();
        const el = document.createElement('div');
        const signals = store.signals;
        el.className = 'alarm__signals';

        signals.map(data => {
            const instanse = new Signal(data);
            el.appendChild(instanse.render())
        });
        return el;
    }
}
