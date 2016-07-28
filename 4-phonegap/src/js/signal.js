import Store from './store';
import * as signalTemplate from '../templates/signal'

export default class Signal {
    constructor(store, data) {
        const el = document.createElement('div');
        el.className = 'signal';

        this.isEdit = false;
        this.isActive = false;
        this.isRepeat = false;
        this.currentInputTime = [];
        this.currentInputEditPosition = null;
        this.currentChar = null;
        this.template = signalTemplate.str;
        this.store = store;
        this.id = data.id;
        this.model = {
            id: data.id,
            active: data.active,
            repeat: data.repeat,
            hour: data.hour,
            minute: data.minute,
            weekDays: ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"]
        }

        el.innerHTML = this.template(this.model);
        this.$el = el;

        this.initialize();
    }

    initialize() {
        this.$keyboardNum = this.$el.querySelectorAll('.keyboard__num');
        this.$signalChar = this.$el.querySelectorAll('.signal__char');
        this.$signalTime = this.$el.querySelector('.signal__time');
        this.$signalDescription = this.$el.querySelector('.signal__description');
        this.$signalDescBlock = this.$el.querySelector('.signal__cell_type_description');
        this.$signalDelete = this.$el.querySelector('.signal__cell_type_delete');
        this.$signalSwitcher = this.$el.querySelector('.signal__cell_type_switcher');
        this.$repeatSwitcher = this.$el.querySelector('.repeat__cell_type_switcher');
        this.$repeatWrap = this.$el.querySelector('.repeat');
        this.$repeatDay = this.$el.querySelectorAll('.repeat__item');

        this.$signalDescBlock.addEventListener('touchstart', Signal.onEdit.bind(this));
        this.$signalDelete.addEventListener('touchstart', Signal.onRemove.bind(this));
        this.$signalSwitcher.addEventListener('touchstart', Signal.onChangeState.bind(this));
        this.$repeatSwitcher.addEventListener('touchstart', Signal.onRepeatState.bind(this));

        for (let day of this.$repeatDay) {
            day.addEventListener('touchstart', Signal.onRepeatDay.bind(this));
        }

        for (let char of this.$signalChar) {
            this.currentInputTime.push(char.getAttribute('data-value'));
            char.addEventListener('touchstart', Signal.onCharClick.bind(this));
        }

        for (let key of this.$keyboardNum) {
            key.addEventListener('touchstart', Signal.onKeyClick.bind(this));
        }

        if (this.model.repeat.length) {
            this.activeRepeat()
        }

        if (this.model.active) {
            this.on()
        }
    }

    on() {
        this.isActive = true;
        this.$el.classList.add('on');
    }

    off() {
        this.isActive = false;
        this.$el.classList.remove('on');
    }

    open() {
        this.isEdit = true;
        this.$el.classList.add('edit');

        // включаем будильник
        this.on();

        // начинаем редактировать с первого
        this.editTime();

        // disabled то что нельзя нажасть
        this.updateKeys();
    }

    close() {
        this.isEdit = false;
        this.$el.classList.remove('edit');
        this.currentChar.classList.remove('on');
    }

    remove() {
        this.store.remove(this.id);
    }
    save() {
        const time = this.currentInputTime.join('');

        this.model.active = this.isActive;
        this.model.hour = parseInt(time[0] + '' + time[1]);
        this.model.minute = parseInt(time[2] + '' + time[3]);

        this.store.set(this.model);
    }

    activeRepeat() {
        this.isRepeat = true;
        this.$repeatWrap.classList.add('repeat_active');
    }

    disactiveRepeat() {
        this.isRepeat = false;
        this.$repeatWrap.classList.remove('repeat_active');
        this.$signalDescription.innerHTML = '';
        this.model.repeat = [];

        for (let day of this.$repeatDay) {
            day.classList.remove('on');
        }
    }

    disableKeys(minValue, maxValue) {
        for (let $key of this.$keyboardNum) {
            const keyValue = parseInt($key.getAttribute('data-value'));
            if (keyValue >= minValue && keyValue <= maxValue) {
                $key.classList.add('disable');
            } else {
                $key.classList.remove('disable');
            }
        }
    }

    activeChar(show = true) {
        for (let $char of this.$signalChar) {
            $char.classList.remove('on');
        }
        if (show) this.currentChar.classList.add('on');
    }

    editTime(position, value) {
        // запоминаем новую позицию
        this.currentInputEditPosition = position || 0;

        // запоминаем выделенную букву
        this.currentChar = this.$signalChar[this.currentInputEditPosition];

        //выделяем нужную цифру
        this.activeChar();

        if (value) {
            // записываем в верстку
            this.currentInputTime[this.currentInputEditPosition] = value;
            this.currentChar.setAttribute('data-value', value);
            this.currentChar.innerHTML = value;

            // сохраняем
            this.save();
        }
    }

    updateKeys() {
        const time = this.currentInputTime;
        switch (this.currentInputEditPosition) {
            case 0:
                this.disableKeys(3, 9);
                break;
            case 1:
                if (parseInt(time[0]) === 2) this.disableKeys(4, 9);
                if (parseInt(time[0]) === 0) this.disableKeys(false);
                break;
            case 2:
                this.disableKeys(6, 9);
                break;
            case 3:
                this.disableKeys(false);
                break;
        }
    }

    static onEdit() {
        if (this.isEdit) {
            this.close()
        } else {
            this.open();
        }
    }

    static onRemove() {
        this.$el.remove();
        this.remove();
    }

    static onChangeState() {
        if (this.isActive) this.off()
        else this.on();
        this.save();
    }

    static onRepeatState() {
        if (this.isRepeat) {
            this.disactiveRepeat();
        } else {
            this.activeRepeat()
        }
    }

    static onRepeatDay(e) {
        e.target.classList.toggle('on')

        const repeat = [];
        const days = [];
        for(let day of this.$repeatDay) {
            const value = day.getAttribute('data-value');
            if (day.classList.contains('on')) {
                repeat.push(value);
                days.push(day.innerHTML);
            }
        }
        this.model.repeat = repeat;

        this.$signalDescription.innerHTML = days.join(', ');
        this.save();
    }

    static onCharClick(e) {
        if (!this.isEdit) {
            this.open();
        } else {
            let position = 0;
            for (let $char of this.$signalChar) {
                if ($char === e.target) this.editTime(position);
                position++;
            }

            // disabled то что нельзя нажасть
            this.updateKeys();
        }
    }

    static onKeyClick(e) {
        const value = e.target.getAttribute('data-value');
        if (this.isEdit && !e.target.classList.contains('disable')) {
            const next = this.currentChar.nextElementSibling;
            this.editTime(this.currentInputEditPosition, value)
            if (!!next) {
                this.currentInputEditPosition++;
                this.currentChar = next;

                // disabled то что нельзя нажасть
                this.updateKeys();

                // выделяем красным букву, которую будем редактировать
                this.activeChar()
            } else {
                this.activeChar(false);
                this.isEdit = false;
            }
        }
    }

    render(config = {}) {
        if (!!config.open) this.open();
        return this.$el;
    }
}
