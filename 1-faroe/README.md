######Вспомогательная колонка
Абсолютное позиционирование. Возможно выравнивать сноску по верхнему или нижнему краю используя модификатор.

###### Первая буква первого абзаца большая 
```css
/*Если первый слайд — картинка */
.section_type_img:first-child + .section_type_txt .content__paragraph:first-of-type:first-letter,

/*Если первый слайд — текст */
.section_type_txt:first-child .content__paragraph:first-of-type:first-letter {}
```

######Разное разрешение изображения в зависимости от DPI экрана
Небольшие картинки используют ```<picture>```. Картинки заголовков используют background-image:
```css
[data-img-id="1"] { background-image: url("../img/img-1.jpeg");}

@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) { 
	[data-img-id="1"] { background-image: url("../img/img-1@2x.jpeg");}
}
```

######Разное обрезание изображений в зависимости от ширины экрана. При скролле первое изображение и изображения в начале секций не двигаются (по типу position: fixed).
```css
background-size: cover;
background-position: center;
background-attachment: fixed;
```
На маленьких экранах свойство ```background-attachment``` переключаем обратно в состояние ```scroll;```, что бы оно не влияло на производительность.

######Текст выровнен в колонку (justified), при этом пробелы между словами не меняются за счет переноса слов по слогам.
Автоматически генерируются переносы, используя gulp-hypher

######Адаптивная типографика
На маленьких и больших экранах шрифт в ```vw```

######Бонус
Версия для печати