import Alarm from './alarm';
import Store from './store';

class App {
    constructor() {
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        window.addEventListener('error', this.onPageError);
    }
    onDeviceReady() {
        const store = new Store(() => {
            // запускаем будильник после инициализации БД
            const alarm = new Alarm(store);
        });
    }
    onPageError(e) {
        if(confirm(e.message)) location.reload();
    }
};

const app = new App();
const myApp = new Framework7();