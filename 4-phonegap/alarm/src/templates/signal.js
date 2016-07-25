export const str = data => `
	<div class="signal__header">
		<div class="signal__cell signal__cell_type_time">
			<div class="signal__time">
				<span class="signal__char"></span>
				<span class="signal__char">7</span>
				<span class="signal__delimit">:</span>
				<span class="signal__char">0</span>
				<span class="signal__char">0</span>
			</div>
			<div class="signal__description">Mn, Fr</div>
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
			<div class="keyboard__num">1</div>
			<div class="keyboard__num">2</div>
			<div class="keyboard__num">3</div>
			<div class="keyboard__num">4</div>
			<div class="keyboard__num">5</div>
		</div>
		<div class="keyboard__row">
			<div class="keyboard__num">6</div>
			<div class="keyboard__num">7</div>
			<div class="keyboard__num">8</div>
			<div class="keyboard__num">9</div>
			<div class="keyboard__num">0</div>
		</div>
	</div>
	<div class="signal__repeat repeat">
		<div class="repeat__cell repeat__cell_type_switcher">
			<div class="repeat__switcher"></div>
		</div>
		<div class="repeat__cell repeat__cell_type_text">Повторять в другие дни</div>
		<div class="repeat__cell repeat__cell_type_list">
			<div class="repeat__list">
				<div class="repeat__item on">Mn</div>
				<div class="repeat__item">Ts</div>
				<div class="repeat__item">Wd</div>
				<div class="repeat__item">Th</div>
				<div class="repeat__item on">Fr</div>
				<div class="repeat__item">St</div>
				<div class="repeat__item">Sn</div>
			</div>
		</div>
	</div>
`