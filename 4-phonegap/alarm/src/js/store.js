export default class Store {
	constructor() {
		this.signals = [{
			active: false,
			time: new Date(2015,1,1,13,13),
			repeat: [0, 5]
		},{
			active: true,
			time: new Date(2015,1,1,7,10),
			repeat: []
		}];
	}
	add() {}
	remove() {}
}