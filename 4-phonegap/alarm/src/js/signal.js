import Store from './store';
import * as signalTemplate from '../templates/signal'

export default class Signal {
	constructor(data){
		this.template = signalTemplate.str;

		const el = document.createElement('div');
		el.className = 'signal edit';
		el.innerHTML = this.template(data); 

		this.el = el;
		this.initialize();
	}
	initialize() {
		const $signalSwitch = document.querySelector('.signal__cell_type_switcher');
		const $signalChar = document.querySelector('.signal__char');
		const $signalDescription = document.querySelector('.signal__description');
		const $signalDelete = document.querySelector('.signal__cell_type_delete');
		const $keyboardNum = document.querySelector('.keyboard__num');
		const $repeatSwitch = document.querySelector('.repeat__cell_type_switcher');
		const $repeatDay = document.querySelector('.repeat__item');
	}
	onRemove(){}
	onEdit(){}
	render(data) {
		return this.el;
	}
}