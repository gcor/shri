export default class Store {
    constructor() {
        const indexedDB = window.indexedDB.open("alarmDatabase57");

        indexedDB.addEventListener('upgradeneeded', Store.onUpgradeneeded.bind(this));
        indexedDB.addEventListener('success', Store.onSuccess.bind(this));
        indexedDB.addEventListener('error', Store.onError.bind(this));

        this.signals = [{
            id: 0,
            active: false,
            hour: 13,
            minute: 19,
            repeat: [0, 5]
        }, {
            id: 1,
            active: true,
            hour: 7,
            minute: 10,
            repeat: []
        }];
        this.lastId = this.signals[this.signals.length - 1].id;
    }

    getAll() {
        return this.signals;
    }

    set(id, signal) {
        this.signals.forEach((item, i) => {
            if (item.id === id) this.signals[i] = signal;
        });
    }

    add(h, m, cb) {
        const item = {
            id: this.lastId++,
            active: false,
            hour: h,
            minute: m,
            repeat: []
        }
        this.signals.push(item);
        cb(item);
    }

    remove(id) {
        let removeIndex = null;
        this.signals.forEach((item, i) => {
            if (item.id === id) removeIndex = i;
        });
        arr.splice(removeIndex, 1);
    }

    drop() {
        this.signals = [];
    }

    static onUpgradeneeded(e) {
        this.db = e.target.result;
        this.db.createObjectStore("signals", { autoIncrement: true, keyPath: "id" });
    }

    static onSuccess(e) {
        this.db = e.target.result;

        const sampleItem = {
            todo: "my todo item",
            added_on: (new Date()).toString()
        };

        const request = this.db.transaction("signals", "readwrite")
            .objectStore("signals")
            .add(sampleItem);

        request.onsuccess = event => console.log("Operation completed successfully");
        request.onerror = event => console.log("Operation failed");
    }

    static onError() {
        console.log("Operation failed");
    }

}
