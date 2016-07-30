## Будильник ##

В качестве приложения для реализации был выбран будильник, который я довольно давно нарисовал, но сделать его так и не получалось. Вышел удобный случай. 

Скачать для Android: [.apk](https://github.com/gcor/shri/raw/alarm/alarm.apk)

###Макет###
В сторе  я не нашел будильников, в которых время сигнала вводится цифрами. Мне захотелось восполнить этот проблел. Правда такой подход показал ряд недостатков. Сверху разположена панель с быстрым добавлением будильника. Можно поставить сигнал, как на утро, так и на часик подремать.

![Alarm](./src/media/alarm.png)

###Сборка###
Исходники проекта лежат в src и компилируются с помощью gulp в папку www  
Команда `gulp gap` вначале собирает приложение:
```
phonegap build browser
phonegap serve browser
```
После этого gulp, как обычно, следит за изменениями в проекте. 

###Плагины###
Для работы будильника используются два плагина для:
* сохранения сигналов в базу через [cordova-plugin-indexedDB](https://github.com/Microsoft/cordova-plugin-indexedDB)
* показ нотификаций через [cordova-plugin-local-notifications](https://github.com/katzer/cordova-plugin-local-notifications)
* splashscreen [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)
 
###Ньюансы###
* splashscreen требует установленный imagemagick