export default class Notification {
    constructor() {
        this.notify = cordova.plugins.notification.local;
    }
    getFullConfig(config) {
        config.title = "Alarm";
        config.text = "wake up!";
        config.sound = "../media/sound.mp3";
        return config;
    }

    add(config) {
        const fullConfig = this.getFullConfig(config);
        this.notify.schedule(config);
    }

    update(config) {
        const fullConfig = this.getFullConfig(config);
        this.notify.update(config)
    }

    clear(id) {
        this.notify.clear(id)
    }
}
