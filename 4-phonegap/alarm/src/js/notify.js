export default class Notification {
    constructor() {
        this.notify = cordova.plugins.notification.local;

    }

    getFullConfig(config) {
        config.title = "Alarm";
        config.text = "wake up!";
        config.sound = "file://media/sound.mp3";
        return config;
    }

    add(config) {
        const fullConfig = this.getFullConfig(config);
        this.notify.shedule(config)
    }

    update(config) {
        const fullConfig = this.getFullConfig(config);
        this.notify.update(config)
    }

    clear(config) {
        const fullConfig = this.getFullConfig(config);
        this.notify.clear(config)
    }
}
