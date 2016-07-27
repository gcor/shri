export default class Store {
    constructor(initCallback) {
        const indexedDB = window.indexedDB.open("alarmDatabase57");

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
            signal.id = event.target.result;
            if (cb) cb(signal);
        };
        request.onerror = event => console.log("Failed", event);
    }

    remove(id) {
        const request = this.db.transaction("signals", "readwrite")
            .objectStore("signals")
            .delete(id);

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

}
