import Store from './store';
import * as signalTemplate from '../templates/signal'

export default class Signal {
    constructor(model) {
        this.isEdit = false;
        this.isActive = false;
        this.isRepeat = false;
        this.template = signalTemplate.str;

        const el = document.createElement('div');
        el.className = 'signal';
        el.innerHTML = this.template(model);
        this.$el = el;

        this.active = model.active;
        this.repeat = model.repeat;
        this.time = model.time;

        this.currentInputTime = [];
        this.currentInputEditPosition = null;
        this.currentChar = null;
        this.currentKey = null;

        this.initialize();

    }
    open() {
        this.isEdit = true;
        this.$el.classList.add('edit');

        this.on();

        // начинаем редактировать сначала
        this.setInputTime();
    }
    close() {
        this.isEdit = false;
        this.$el.classList.remove('edit');
        this.currentChar.classList.remove('on');
    }
    on() {
        this.isActive = true;
        this.$el.classList.add('on');
    }
    off() {
        this.isActive = false;
        this.$el.classList.remove('on');
    }
    activeRepeat() {
        this.isRepeat = true;
        this.$repeatWrap.classList.add('repeat_active');
    }
    disactiveRepeat() {
        this.isRepeat = false;
        this.$repeatWrap.classList.remove('repeat_active');
        for (let day of this.$repeatDay) {
            this.repeat = [];
            day.classList.remove('on');
        }
    }
    initialize() {

        this.$keyboardNum = this.$el.querySelectorAll('.keyboard__num');
        this.$signalChar = this.$el.querySelectorAll('.signal__char');
        this.$signalTime = this.$el.querySelector('.signal__time');
        this.$signalDesc = this.$el.querySelector('.signal__cell_type_description');
        this.$signalDelete = this.$el.querySelector('.signal__cell_type_delete');
        this.$signalSwitcher = this.$el.querySelector('.signal__cell_type_switcher');
        this.$repeatSwitcher = this.$el.querySelector('.repeat__cell_type_switcher');
        this.$repeatWrap = this.$el.querySelector('.repeat');
        this.$repeatDay = this.$el.querySelectorAll('.repeat__item');


        this.$signalDesc.addEventListener('click', Signal.onEdit.bind(this));
        this.$signalDelete.addEventListener('click', Signal.onRemove.bind(this));
        this.$signalSwitcher.addEventListener('click', Signal.onChangeState.bind(this));
        this.$repeatSwitcher.addEventListener('click', Signal.onRepeatState.bind(this));

        for (let day of this.$repeatDay) {
            day.addEventListener('click', Signal.onRepeatDay.bind(this));
        }

        for (let char of this.$signalChar) {
            this.currentInputTime.push(char.getAttribute('data-value'));
            char.addEventListener('click', Signal.onCharClick.bind(this));
        }

        for (let key of this.$keyboardNum) {
            key.addEventListener('click', Signal.onKeyClick.bind(this));
        }

        if (this.repeat.length) {
            this.activeRepeat()
        }
        if (this.active) {
            this.on()
        }
    }

    activeKey(value) {
        for (let $key of this.$keyboardNum) {
            const keyValue = $key.getAttribute('data-value');
            if (keyValue === value) $key.classList.add('on');
            else $key.classList.remove('on');
        }
    }
    activeChar(show = true) {
        for (let $char of this.$signalChar) {
            $char.classList.remove('on');
        }
        if (show) this.currentChar.classList.add('on');
    }
    setInputTime(position, value) {
        // запоминаем новую позицию
        this.currentInputEditPosition = position || 0;

        // запоминаем выделенную букву
        this.currentChar = this.$signalChar[this.currentInputEditPosition];

        //выделяем нужную цифру
        this.activeChar();
        this.activeKey(this.currentInputTime[this.currentInputEditPosition]);

        if (value) {
            // записываем в верстку
            this.currentInputTime[this.currentInputEditPosition] = value;
            this.currentChar.setAttribute('data-value', value);
            this.currentChar.innerHTML = value;
        }
        this.updateKeys();
    }

    updateKeys() {
    	// const h = parseInt(this.currentInputTime.slice(0,2).join(''));
    	// const m = parseInt(this.currentInputTime.slice(-2,this.currentInputTime.length).join(''));
    	// console.log(h, m);

    	// disabled
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
        console.log('remove')
    }
    static onChangeState() {
        if (this.isActive) this.off()
        else this.on();
    }
    static onRepeatState() {
        if (this.isRepeat) {
            this.disactiveRepeat();
        } else {
            this.activeRepeat()
        }
    }
    static onRepeatDay(e) {
        e.target.classList.toggle('on');
    }
    static onCharClick(e) {
        if (!this.isEdit) {
            this.open();
        } else {
            let position = 0;
            for (let $char of this.$signalChar) {
                if ($char === e.target) this.setInputTime(position);
                position++;
            }
        }
    }
    static onKeyClick(e) {
        const value = e.target.getAttribute('data-value');
        if (this.isEdit && !e.target.classList.contains('disabled')) {
        	const next = this.currentChar.nextElementSibling;
        	this.setInputTime(this.currentInputEditPosition, value)
        	if (!!next) {
        		this.currentInputEditPosition = this.currentInputEditPosition + 1;
        		this.currentChar = next;
	        	this.activeChar()
	        	this.activeKey(this.currentInputTime[this.currentInputEditPosition]);
        	}
        	else {
        		this.activeKey(false);
        		this.activeChar(false);
        		this.isEdit = false;
        	}
        }
    }
    render(data) {
        return this.$el;
    }
}
