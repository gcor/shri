import Alarm from './alarm';
import Store from './store';

class App {
    constructor () {
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }
    onDeviceReady() {
    	const store = new Store(() => {
    		// запускаем будильник после инициализации БД
	        const alarm = new Alarm(store);
    	});
    }
};

const app = new App();


// forse start
// app.onDeviceReady();