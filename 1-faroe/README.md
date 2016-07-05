######Вспомогательная колонка
Абсолютное позиционирование. Возможно выравнивать сноску по верху или низу используя модификатор.


###### Первая буква первого абзаца большая 
```css
/*Если первый слайд — картинка */
.section_type_img:first-child + .section_type_txt .content__paragraph:first-of-type:first-letter,

/*Если первый слайд — текст */
.section_type_txt:first-child .content__paragraph:first-of-type:first-letter {}
```

######Разное разрешение изображения в зависимости от DPI экрана
```
[data-img-id="1"] { background-image: url("../img/img-1.jpeg");}

@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) { 
	[data-img-id="1"] { background-image: url("../img/img-1@2x.jpeg");}
}
```
Нефоновые картинки используют ```<picture>```

######Разное обрезание изображений в зависимости от ширины экрана. При скролле первое изображение и изображения в начале секций не двигаются (по типу position: fixed).
```
background-size: cover;
background-position: center;
background-attachment: fixed;
```

######Текст выровнен в колонку (justified), при этом пробелы между словами не меняются за счет переноса слов по слогам.
```hyphens: auto;``` Я не использовал js т.к задание на css. Но можно определить браузер, поддерживающий hyphens, используя модернизер или собственный код и добавилять ```text-align:justify```, который сделает выравнивание лучше.

######Адаптивная типографика
На маленьких экранах шрифт в ```vw```

######Бонусы
1. Полупрозрачный градиент поверх картинок с заголовками. Как на макете.
2. Версия для печати