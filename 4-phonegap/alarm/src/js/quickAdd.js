import * as quickAddTemplate from '../templates/quickAdd'

export default class QuickAdd {
	constructor(alarm, data){
		this.template = quickAddTemplate.str;
		this.alarm = alarm;

		const el = document.createElement('div');
		el.className = 'quickadd';
		el.innerHTML = this.template(data); 
		this.$el = el;

		this.initialize();
	}

	initialize() {
		this.$nowAdd = this.$el.querySelector('.quickadd__item_add-now');
		this.$dateAdd = this.$el.querySelectorAll('.quickadd__item_add-date');
		this.$timeAdd = this.$el.querySelectorAll('.quickadd__item_add-time');

		this.$nowAdd.addEventListener('click', this.onAddNow.bind(this));

		for (let $date of this.$dateAdd) {
			$date.addEventListener('click', this.onAddDate.bind(this));
		}

		for (let $time of this.$timeAdd) {
			$time.addEventListener('click', this.onAddTime.bind(this));
		}
	}

	addSignal(hour, minute) {
		const now = new Date();
		const h = hour || now.getHours();
		const m = minute || now.getMinutes();

		this.alarm.add(h, m);
	}

	onAddNow() {
		this.addSignal();
	}

	onAddDate(e) {
		const h = e.currentTarget.getAttribute('data-hour');
		const m = e.currentTarget.getAttribute('data-minute');
		this.alarm.add(h, m);
	}

	onAddTime(e) {
		const now = new Date();
		const minutes = e.currentTarget.getAttribute('data-minutes');
		const milliseconds = now.getTime() + (minutes*60*1000);
		const signalTime = new Date(milliseconds);
		const h = signalTime.getHours();
		const m = signalTime.getMinutes();
		this.alarm.add(h, m);
	}

	render(data) {
		return this.$el;
	}
}