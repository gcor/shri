import Alarm from './alarm';
import Store from './store';

class App {
    constructor() {
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


        // window.wakeuptimer.wakeup(successCallback, errorCallback,
        //     // a list of alarms to set
        //     {
        //         alarms: [{
        //             type: 'onetime',
        //             time: { hour: 16, minute: 23 },
        //             extra: { message: 'json containing app-specific information to be posted when alarm triggers' },
        //             message: 'Alarm has expired!'
        //         }]
        //     }
        // );

        // // snooze...
        // window.wakeuptimer.snooze(successCallback, errorCallback, {
        //     alarms: [{
        //         type: 'snooze',
        //         time: { seconds: 60 }, // snooze for 60 seconds 
        //         extra: {}, // json containing app-specific information to be posted when alarm triggers
        //         message: console.log('message'),
        //         sound: console.log('sound'),
        //         action: console.log('action')
        //     }]
        // });

        // // example of a callback method
        // var successCallback = function(result) {
        //     if (result.type === 'wakeup') {
        //         console.log('wakeup alarm detected--' + result.extra);
        //     } else if (result.type === 'set') {
        //         console.log('wakeup alarm set--' + result);
        //     } else {
        //         console.log('wakeup unhandled type (' + result.type + ')');
        //     }
        // };

        // var errorCallback = err => console.log(err)

    }
};

const app = new App();


// forse start
// app.onDeviceReady();
