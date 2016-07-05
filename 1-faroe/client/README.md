Реализации:

Вспомогательная колонка
Абсолютное позиционирвоание. Возможно выравнивать сноску по верху или низу используя модификатор.

Первая буква первого абзаца большая
/*Если первый слайд — картинка */
.section_type_img:first-child + .section_type_txt .content__paragraph:first-of-type:first-letter,
/*Если первый слайд — текст */
.section_type_txt:first-child .content__paragraph:first-of-type:first-letter {}

Разное разрешение изображения в зависимости от DPI экрана
[data-img-id="1"] { background-image: url("../img/img-1.jpeg");}
@media  only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) { 
	[data-img-id="1"] { background-image: url("../img/img-1@2x.jpeg");}
}

Разное обрезание изображений в зависимости от ширины экрана
При скролле первое изображение и изображения в начале секций не двигаются (по типу position: fixed).
background-size: cover;
background-position: center;
background-attachment: fixed;

Текст выровнен в колонку (justified), при этом пробелы между словами не меняются за счет переноса слов по слогам.
hyphens: auto; Если подключить модернизер или самому определить поддерживаемость свойства в браузере, то для браузеров которые поддерживают свойство можно добавить text-align:justify, который сделает еще красивей. Но так как задание на css, не стал подключать

Адаптивная типографика
На маленьких экранах шрифт в vw


Бонусы
1. Полупрозрачный градиент поверх картинок с заголовками. Как на макете.
2. Версия для печати