export default class Store {
    constructor(initCallback) {
        const indexedDB = window.indexedDB.open("alarmDatabase57");
        this.notify = cordova.plugins.notification.local;
        this.notifyTitle = "Alarm";
        this.notifyText = "wake up!";
        this.notifySound = "file://media/sound.mp3";

        this.db = null;
        this.initCallback = initCallback;

        indexedDB.addEventListener('upgradeneeded', Store.onUpgradeneeded.bind(this));
        indexedDB.addEventListener('success', Store.onSuccess.bind(this));
        indexedDB.addEventListener('error', Store.onError.bind(this));
    }

    getAll(cb) {
        const request = this.db.transaction("signals")
            .objectStore("signals")
            .getAll();

        request.onsuccess = event => {
            if (cb) cb(event.target.result);
        }
        request.onerror = event => console.log("Failed", event);
    }

    set(signal) {
        // повторяем раз в неделю
        if (signal.repeat.length) {
            signal.repeat.forEach((item, i) => {
                this.notify.update({
                    id: `${signal.id}.${i}`,
                    title: this.notifyTitle,
                    text: this.notifyText,
                    sound: this.notifySound,
                    firstAt: Store.getTimeByHourAndMin(signal.hour, signal.minute),
                    every: "week"
                });
            });
        } else {
            // обычные оповещения
            this.notify.update({
                id: signal.id,
                title: this.notifyTitle,
                text: this.notifyText,
                sound: this.notifySound,
                firstAt: Store.getTimeByHourAndMin(signal.hour, signal.minute)
            });
        }

        const request = this.db.transaction("signals", "readwrite")
            .objectStore("signals")
            .put(signal);

        request.onerror = event => console.log("Failed", event);
    }

    add(h, m, cb) {
        const signal = {
            active: false, // по умолчанию выключено
            hour: h,
            minute: m,
            repeat: []
        };

        const request = this.db.transaction("signals", "readwrite")
            .objectStore("signals")
            .add(signal);

        request.onsuccess = event => {
            let id = event.target.result;

            this.notify.schedule({
                id: id,
                title: this.notifyTitle,
                text: this.notifyText,
                sound: this.notifySound,
                firstAt: Store.getTimeByHourAndMin(h, m)
            });

            signal.id = id;
            if (cb) cb(signal);
        };
        request.onerror = event => console.log("Failed", event);
    }

    remove(id) {
        const request = this.db.transaction("signals", "readwrite")
            .objectStore("signals")
            .delete(id);

        this.notify.clear(id);

        request.onerror = event => console.log("Failed", event);
    }

    static onUpgradeneeded(e) {
        this.db = e.target.result;
        this.db.createObjectStore("signals", { autoIncrement: true, keyPath: "id" });
    }

    static onSuccess(e) {
        this.db = e.target.result;
        this.initCallback();
    }

    static onError() {
        console.log("Failed");
    }

    static getTimeByHourAndMin(h, m) {
        let now = new Date();
        let date = new Date(now.getFullYear(), now.getMonth(), now.getDay(), h, m);;

        // если сегодня уже прошло, назначаем сигнал на завтра
        if (now.getTime() > date.getTime()) {
            date = date.getTime() + 1000 * 60 * 60 * 24;
        }
        return date;
    }

}
