import * as quickAddTemplate from '../templates/quickAdd'

export default class QuickAdd {
	constructor(data){
		this.template = quickAddTemplate.str;

		const el = document.createElement('div');
		el.className = 'quickadd';
		el.innerHTML = this.template(data); 

		this.el = el;
	}
	render(data) {
		return this.el;
	}
}