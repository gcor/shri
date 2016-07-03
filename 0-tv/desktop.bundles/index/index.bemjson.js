({
    block: 'page',
    title: 'TV',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    content: [{
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'checkbox',
            id: 'filter_sport'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'checkbox',
            id: 'filter_film'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'checkbox',
            id: 'filter_child'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'radio',
            name: 'days',
            id: 'day_24',
            checked: 'checked'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'radio',
            name: 'days',
            id: 'day_25'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'radio',
            name: 'days',
            id: 'day_26'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'radio',
            name: 'days',
            id: 'day_27'
        }
    }, {
        tag: 'input',
        elem: 'input',
        attrs: {
            type: 'radio',
            name: 'days',
            id: 'day_28'
        }
    }, {
        block: 'header',
        content: {
            block: 'logo',
            mix: { block: 'header', elem: 'logo' },
            content: 'Телепрограмма'
        }
    }, {
        block: 'main',
        content: [{
            block: 'popular',
            content: [{
                block: 'block',
                mix: { block: 'popular', elem: 'item' },
                content: [{
                    block: 'image',
                    alt: 'tv',
                    url: '../../img/film1.jpg',
                    mix: { block: 'block', elem: 'img' }
                }, {
                    elem: 'content',
                    content: {
                        elem: 'title',
                        content: ['Виола Тараканова. В мире преступных страстей', {
                            elem: 'subtitle',
                            content: '13:00, Первый'
                        }]
                    }
                }]
            }, {
                block: 'block',
                mix: { block: 'popular', elem: 'item' },
                content: [{
                    block: 'image',
                    alt: 'tv',
                    url: '../../img/film2.jpg',
                    mix: { block: 'block', elem: 'img' }
                }, {
                    elem: 'content',
                    content: {
                        elem: 'title',
                        content: ['Декстер', {
                            elem: 'subtitle',
                            content: '13:20, Россия 2'
                        }]
                    }
                }]
            }, {
                block: 'block',
                mix: { block: 'popular', elem: 'item' },
                content: [{
                    block: 'image',
                    alt: 'tv',
                    url: '../../img/film3.jpg',
                    mix: { block: 'block', elem: 'img' }
                }, {
                    elem: 'content',
                    content: {
                        elem: 'title',
                        content: ['Отчаянные домохозяйки', {
                            elem: 'subtitle',
                            content: '13:30, Мир'
                        }]
                    }
                }]
            }, {
                block: 'block',
                mix: { block: 'popular', elem: 'item' },
                content: [{
                    block: 'image',
                    alt: 'tv',
                    url: '../../img/film4.jpg',
                    mix: { block: 'block', elem: 'img' }
                }, {
                    elem: 'content',
                    content: {
                        elem: 'title',
                        content: ['Мыслить как преступник', {
                            elem: 'subtitle',
                            content: '13:00, НТВ'
                        }]
                    }
                }]
            }, {
                block: 'block',
                mix: { block: 'popular', elem: 'item' },
                content: [{
                    block: 'image',
                    alt: 'tv',
                    url: '../../img/film1.jpg',
                    mix: { block: 'block', elem: 'img' }
                }, {
                    elem: 'content',
                    content: {
                        elem: 'title',
                        content: ['Пару слов', {
                            elem: 'subtitle',
                            content: '13:10, Пятница'
                        }]
                    }
                }]
            }]
        }, {
            block: 'clearfix',
            content: [{
                block: 'nav',
                mods: { type: 'time' },
                content: [{
                    elem: 'title',
                    content: "Календарь"
                }, {
                    elem: 'list',
                    content: [{
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'day_24' },
                        content: 'Сегодня'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'day_25' },
                        content: 'Завтра'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'day_26' },
                        content: '26, Вт'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'day_27' },
                        content: '27, Ср'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'day_28' },
                        content: '28, Чт'
                    }]
                }]
            }, {
                block: 'nav',
                mods: { type: 'filter' },
                content: [{
                    elem: 'title',
                    content: "Фильтры"
                }, {
                    elem: 'list',
                    content: [{
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'filter_sport' },
                        content: 'Фильмы'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'filter_film' },
                        content: 'Спорт'
                    }, {
                        elem: 'item',
                        tag: 'label',
                        attrs: { for: 'filter_child' },
                        content: 'Детям'
                    }]
                }]
            }]
        }, {
            block: 'programms',
            content: [{
                elem: 'day',
                attrs: { 'data-day': '24' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film',
                                    'data-time': 'live'
                                },
                                content: 'Гости по воскресеньям. Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Обнимая небо. 10-я - 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film',
                                    'data-time': 'live'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film',
                                    'data-time': 'live'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Барби и команда шпионов'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Смешарики. Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Лунтик и его друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film',
                                    'data-time': 'live'
                                },
                                content: 'Вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film',
                                    'data-time': 'live'
                                },
                                content: 'Росгосстрах. Чемпионат России по футболу. "Ростов" - "Зенит". Прямая трансляция'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }, {
                elem: 'day',
                attrs: { 'data-day': '25' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Гости по воскресеньям. Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Обнимая небо. 10-я - 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Барби и команда шпионов'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Смешарики. Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Лунтик и его друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Воскресный вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Женатый холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Росгосстрах. Чемпионат России по футболу. "Ростов" - "Зенит". Прямая трансляция'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }, {
                elem: 'day',
                attrs: { 'data-day': '25' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Гости по воскресеньям. Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Обнимая небо. 10-я - 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Барби'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Смешарики. Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Лунтик и его друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Воскресный вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Женатый холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Росгосстрах. Чемпионат России по футболу. "Ростов" - "Зенит". Прямая трансляция'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }, {
                elem: 'day',
                attrs: { 'data-day': '26' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Гости по воскресеньям. Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Обнимая небо. 10-я - 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Барби и команда шпионов'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Смешарики. Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Воскресный вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Женатый холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Росгосстрах. Чемпионат России по футболу. "Ростов" - "Зенит". Прямая трансляция'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }, {
                elem: 'day',
                attrs: { 'data-day': '27' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Гости по воскресеньям. Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Обнимая небо. 10-я - 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: '"Клуб Веселых и Находчивых". Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Барби и команда шпионов'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                                                attrs: {
                                    'data-type': 'child',
                                },
                                content: 'Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Лунтик и его друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Воскресный вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Женатый холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Росгосстрах. Чемпионат России по футболу. "Ростов" - "Зенит". Прямая трансляция'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }, {
                elem: 'day',
                attrs: { 'data-day': '28' },
                content: [{
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch1.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Первый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Татьяна Лютаева'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Трактир на Пятницкой'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'child'
                                },
                                content: ' 12-я серии'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'child'
                                },
                                content: '"Высшая лига. Третий четвертьфинал'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Воскресное "Время"'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch4.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Россия 1'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Что? Где? Когда? Пятая игра весенней серии игр'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'child'
                                },
                                content: 'Ржавчина. Огненный подряд'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Ягодный пирог. Шарлотта Земляничка'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Мой личный враг. 1-я и 2-я серии'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch5.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'МАТЧ ТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Баскетбол. Единая лига ВТБ. Прямая трансляция. "Зенит" (Санкт-Петербург) - УНИКС (Казань)'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Барби и команда шпионов'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Смешарики. Пин-код'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Лунтик и его друзья'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Спокойной ночи, малыши!'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch2.png',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'Пятый'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Воскресный вечер с Владимиром Соловьёвым'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Женатый холостяк'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Каменская. Смерть ради смерти'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Приключения Шерлока Холмса и доктора Ватсона. Собака Баскервилей'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Утро России'
                            }]
                        }]
                    }]
                }, {
                    block: 'programm',
                    content: [{
                        elem: 'head',
                        content: [{
                            elem: 'logo',
                            content: {
                                block: 'image',
                                alt: 'tv',
                                url: '../../img/ch3.jpg',
                                mix: { block: 'programm', elem: 'img' }
                            }
                        }, {
                            elem: 'title',
                            content: 'НТВ'
                        }]
                    }, {
                        elem: 'list',
                        content: [{
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'film'
                                },
                                content: 'Росгосстрах'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Новости'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Гуппи и пузырики'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                attrs: {
                                    'data-type': 'sport'
                                },
                                content: 'Модный приговор'
                            }]
                        }, {
                            elem: 'item',
                            content: [{
                                block: 'info',
                                mix: {block:'programm', elem:'info'},
                                content: [{
                                    elem:'image',
                                    content: {
                                        block: 'image',
                                        mix: {block:'info', elem:'img'},
                                        alt: 'tv',
                                        url: '../../img/film3.jpg'
                                    }
                                }, {
                                    elem: 'text',
                                    content: 'Увлекательная история настоящей дружбы между сорванцом Гекльберри Финном и беглым рабом. Спасаясь от преследования, эта странная парочка отправляется в непредсказуемое путешествие по диким просторам Миссисипи. По пути героев ожидает столько невероятных приключений и необычных встреч, что их хватило бы на несколько историй!'
                                }]
                            },{
                                elem: 'time',
                                content: '05:00'
                            }, {
                                elem: 'text',
                                content: 'Своя чужая. 7-я серия - "Метод шамана"'
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }]
});
