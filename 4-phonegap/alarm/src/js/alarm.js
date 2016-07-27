import Store from './store'
import Signal from './signal'
import QuickAdd from './quickAdd'

export default class Alarm {
    constructor(store) {
        this.store = store;
        this.$header = document.querySelector('.alarm__header');
        this.$body = document.querySelector('.alarm__body');
        this.$signals = null;

        this.initSignals();
        this.initQuickAdd();
    }

    initQuickAdd(times) {
        const el = document.createElement('div');
        const instanse = new QuickAdd(this);

        el.className = 'alarm__add';
        el.appendChild(instanse.render())
        
        this.$header.appendChild(el);
    }

    initSignals() {
        const el = document.createElement('div');
        el.className = 'alarm__signals';
        this.$signals = el;

        const signals = this.store.getAll(signals => {
            signals.map(data => {
                this.renderSignal(data);
            });

            this.$body.appendChild(el);
        });
    }

    add(hour, minute) {
        this.store.add(hour, minute, (data) => {
            this.renderSignal(data, { open: true })
        })
    }

    renderSignal(data, config = {}) {
        const instanse = new Signal(this.store, data);
        this.$signals.insertBefore(instanse.render(config), this.$signals.firstChild)
    }
}
