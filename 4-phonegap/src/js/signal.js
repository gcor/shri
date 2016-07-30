import Store from './store';
import * as signalTemplate from '../templates/signal'
const $$ = Dom7;

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
        this.$keyboardNum = $$(this.$el).find('.keyboard__num');
        this.$signalChar = $$(this.$el).find('.signal__char');
        this.$signalTime = $$(this.$el).find('.signal__time');
        this.$signalDescription = $$(this.$el).find('.signal__description');
        this.$signalDescBlock = $$(this.$el).find('.signal__cell_type_description');
        this.$signalDelete = $$(this.$el).find('.signal__remove');
        this.$signalSwitcher = $$(this.$el).find('.signal__cell_type_switcher');
        this.$repeatSwitcher = $$(this.$el).find('.repeat__cell_type_switcher');
        this.$repeatWrap = $$(this.$el).find('.repeat');
        this.$repeatDay = $$(this.$el).find('.repeat__item');

        this.$signalDescBlock.on('click', Signal.onEdit.bind(this));
        this.$signalDelete.on('click', Signal.onRemove.bind(this));
        this.$signalSwitcher.on('click', Signal.onChangeState.bind(this));
        this.$repeatSwitcher.on('click', Signal.onRepeatState.bind(this));

        this.$repeatDay.on('click', Signal.onRepeatDay.bind(this));
        this.$keyboardNum.on('click', Signal.onKeyClick.bind(this));

        this.$signalChar.each(char => {
            this.currentInputTime.push(this.$signalChar[char].getAttribute('data-value'));
            $$(this.$signalChar[char]).on('click', Signal.onCharClick.bind(this));
        });


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
        $$(this.$repeatWrap)[0].classList.add('repeat_active');
    }

    disactiveRepeat() {
        this.isRepeat = false;
        $$(this.$repeatWrap)[0].classList.remove('repeat_active');
        this.$signalDescription.innerHTML = '';
        this.model.repeat = [];


        this.$repeatDay.each(day => {
            this.$repeatDay[day].classList.remove('on');
        });
    }

    disableKeys(minValue, maxValue) {
        this.$keyboardNum.each($key => {
            const keyValue = parseInt(this.$keyboardNum[$key].getAttribute('data-value'));
            if (keyValue >= minValue && keyValue <= maxValue) {
                this.$keyboardNum[$key].classList.add('disable');
            } else {
                this.$keyboardNum[$key].classList.remove('disable');
            }
        });
    }

    activeChar(show = true) {
        this.$signalChar.each($char => {
            this.$signalChar[$char].classList.remove('on');
        });
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
        this.$repeatDay.each(day => {
            const value = this.$repeatDay[day].getAttribute('data-value');
            if (this.$repeatDay[day].classList.contains('on')) {
                repeat.push(value);
                days.push(this.$repeatDay[day].innerHTML);
            }
        });
        this.model.repeat = repeat;

        this.$signalDescription.innerHTML = days.join(', ');
        this.save();
    }

    static onCharClick(e) {
        if (!this.isEdit) {
            this.open();
        } else {
            let position = 0;
            this.$signalChar.each($char => {
                if (this.$signalChar[$char] === e.target) this.editTime(position);
                position++;
            });

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
