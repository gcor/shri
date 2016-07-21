import Player from './player';
import * as loader from './helpers/loader';

class App {
    constructor() {
        this.src = {};
        this.$pages = document.querySelectorAll('.page');
        this.$inputs = document.querySelectorAll('.form__input');
        this.$submit = document.querySelector('.form__submit');
        this.$player = document.querySelector('.player');

        this.$submit.addEventListener('click', this.onSubmit.bind(this));

    }

    onSubmit(e) {
        e.preventDefault();

        let relativePath = '../';
        for (let input of this.$inputs) {
            let type = input.getAttribute('data-type');
            this.src[type] = relativePath + input.value;
        }
        this.initPlayer();
    }

    // открыть страницу data-type = @type
    openPage(type) {
        const currentPage = document.querySelector(`[data-page="${type}"]`);
        for (let page of this.$pages) {
            if (!page.classList.contains('hidden')) {
                page.classList.add('hidden');
            }
            if (currentPage) {
                currentPage.classList.remove('hidden');
            }
        }
        return currentPage;
    }

    // инициализация Плеера
    initPlayer() {
        // открываем страницу плеера
        const playerPage = this.openPage('player');
        // загружаем видео, аудио и субтитры
        // Promise
        //     .all([
        //         loader.load(this.src.video),
        //         loader.load(this.src.subtitles),
        //         loader.load(this.src.audio)
        //     ])
        //     .then((response) => {
        //      console.log(response)
        //         const player = new Player(response[0],response[1],response[2]);
        //     });

        // сейчас работает локально
        const player = new Player(this.src.video, this.src.subtitles, this.src.audio);

        // убираем лоадер
        this.$player.removeAttribute('data-loader');
    }
}

const app = new App();
