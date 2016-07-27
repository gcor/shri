import Store from './store'
import Signal from './signal'
import QuickAdd from './quickAdd'

export default class Alarm {
    constructor() {
        this.store = new Store();
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
        const instanse = new QuickAdd(this);
        el.appendChild(instanse.render())
        return el;
    }

    initSignals() {
        const el = document.createElement('div');
        const signals = this.store.signals;
        el.className = 'alarm__signals';
        this.$signals = el;

        signals.map(data => {
            this.renderSignal(data);
        });

        return el;
    }

    add(hour, minute) {
        this.store.add(hour, minute, (data) => {
            this.renderSignal(data, {open: true})
        })
    }

    renderSignal(data, config = {}) {
        const instanse = new Signal(this.store, data);
        this.$signals.insertBefore(instanse.render(config), this.$signals.firstChild)
    }
}
