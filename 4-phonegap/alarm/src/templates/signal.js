const weekDays = ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"];

export const str = data => `
	<div class="signal__header">
		<div class="signal__cell signal__cell_type_time">
			<div class="signal__time">
				${signalTime(data.time)}
			</div>
		</div>
		<div class="signal__cell signal__cell_type_description">
			<div class="signal__description">
				${signalDescription(data.time, data.repeat)}
			</div>
		</div>
		<div class="signal__cell signal__cell_type_delete">
			<div class="signal__delete"></div>
		</div>
		<div class="signal__cell signal__cell_type_switcher">
			<div class="signal__switcher"></div>
		</div>
	</div>
	<div class="signal__keyboard keyboard">
		<div class="keyboard__row">
			<div class="keyboard__num" data-value="1">1</div>
			<div class="keyboard__num" data-value="2">2</div>
			<div class="keyboard__num" data-value="3">3</div>
			<div class="keyboard__num" data-value="4">4</div>
			<div class="keyboard__num" data-value="5">5</div>
		</div>
		<div class="keyboard__row">
			<div class="keyboard__num" data-value="6">6</div>
			<div class="keyboard__num" data-value="7">7</div>
			<div class="keyboard__num" data-value="8">8</div>
			<div class="keyboard__num" data-value="9">9</div>
			<div class="keyboard__num" data-value="0">0</div>
		</div>
	</div>
	<div class="signal__repeat repeat">
		<div class="repeat__cell repeat__cell_type_switcher">
			<div class="repeat__switcher"></div>
			<div class="repeat__description">Повторять в другие дни</div>
		</div>
		<div class="repeat__cell repeat__cell_type_list">
			<div class="repeat__list">
				${repeatItems(data.repeat)}
			</div>
		</div>
	</div>
`

export const signalTime = (time) => {
    let html = '';
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();

    if (h.length === 1) h = 0 + h;
    if (m.length === 1) m = 0 + m;

    for (let i = 0; i < h.length; i++) {
        html += `<div class="signal__char" data-value="${h[i]}">${h[i]}</div>`
    }
    for (let i = 0; i < m.length; i++) {
        html += `<div class="signal__char" data-value="${m[i]}">${m[i]}</div>`
    }
    return html
}

export const repeatItems = (times) => {
    let html = '';
    weekDays.forEach((day, i) => {
        let activeClass = (times.indexOf(i) > -1) ? 'on' : '';
        html += `<div class="repeat__item ${activeClass}">${day}</div>`
    });
    return html
}

export const signalDescription = (signal, times) => {
    let html = '';
    if (!times.length) {
        const diff = (new Date()) - signal;
        // return -Math.round(diff/1000/60)
    } else {
        times.forEach((day) => {
            html += `${weekDays[day]}, `
        });
    }
    return html.slice(0, -2);
}
