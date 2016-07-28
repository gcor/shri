import Notification from './notify'

export default class Store {
    constructor(initCallback) {
        const indexedDB = window.indexedDB.open("alarmDatabase57");

        this.db = null;
        this.notify = new Notification();
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
        if (signal.active) {
            // повторяем раз в неделю
            if (signal.repeat.length) {
                signal.repeat.forEach((week, i) => {
                    this.notify.update({
                        id: `${signal.id}.${i}`,
                        every: "week",
                        at: Store.getWeekTime(week, signal.hour, signal.minute)
                    })
                });
            } else {
                // обычные оповещения
                this.notify.update({
                    id: signal.id,
                    at: Store.getOnceTime(signal.hour, signal.minute)
                })
            }
        // если будильник выключаем, удаляем id
        } else {
            this.notify.clear(signal.id);
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
            signal.id = id;

            this.notify.add({
                id: id,
                at: Store.getOnceTime(h, m)
            });

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

    static getOnceTime(h, m) {
        let now = new Date();
        let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);;
        let day = 1000 * 60 * 60 * 24;

        // если сегодня уже прошло, назначаем сигнал на завтра
        if (now.getTime() > date.getTime()) {
            date = date.getTime() + day;
        }

        return (new Date(date));
    }

    static getWeekTime(week, h, m) {
        let now = new Date();
        let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);;
        let day = 1000 * 60 * 60 * 24;

        // день возвращаем до понедельника и прибавляем нужное количество дней.
        date.setDate(date.getDate() - date.getDay() + parseInt(week));

        // если сегодня уже прошло, назначаем сигнал на следующую неделю
        if (now.getTime() > date.getTime()) {
            date = date.getTime() + (day * 7);
        }

        return (new Date(date));
    }
}
