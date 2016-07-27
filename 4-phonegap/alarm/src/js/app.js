import Alarm from './alarm';

class App {
    constructor () {
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    onDeviceReady() {
        const alarm = new Alarm();
    }
};

const app = new App();


// forse start
// app.onDeviceReady();