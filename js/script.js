const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 880,
    allowTouchMove: false,

    a11y: {
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    autoplay: {
        delay: 4000, 
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
    
});

document.addEventListener('DOMContentLoaded', (e) => {

var btnSearchOpen = document.querySelector('.header-site__button-search');
var btnSearchClose = document.querySelector('.mobile-search-btn');
var windowSearch = document.querySelector('.mobile-search');

    btnSearchOpen.addEventListener('click', function() {
        event.preventDefault();
        windowSearch.classList.toggle('mobile-search--active');
    });
    
    btnSearchClose.addEventListener('click', function() {
        windowSearch.classList.toggle('mobile-search--active');
        event.preventDefault();
    }); 

});

var modalOpen = document.getElementById('modal-open-one');
var modalClose = document.getElementById('modal-close');
var modalWindow = document.querySelector('.gallery-modal');

    modalOpen.addEventListener('click', function() {
        modalWindow.classList.add('modal--active');
        document.body.classList.add('scroll-lock');
        document.body.classList.add('scroll-fix');
    });

    modalClose.addEventListener('click', function() {
        modalWindow.classList.remove('modal--active')
        document.body.classList.remove('scroll-lock');
        document.body.classList.remove('scroll-fix');
    });

document.addEventListener('keydown', function (e) {
    if(e.which === 27) {
        modalWindow.classList.remove('modal--active');
    }
});

var scrollAutorBtn = document.querySelector('.yaer-accordeon-item-artist');
var scrollAutorPoint = document.querySelector('.catalog-section__left');

function scrollButtonClick() {   
    if (document.documentElement.clientWidth < 1023) {
        scrollAutorPoint.scrollIntoView({block: "center", behavior: "smooth"});
   } else {
        false;
   } 
};

    scrollAutorBtn.addEventListener('click', scrollButtonClick);


let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.burger-navigation');
let menuBtnClose = document.querySelector('.burger-exit-btn');
menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
    document.body.classList.toggle('scroll-lock');
})

menuBtnClose.addEventListener('click', function() {
    document.body.classList.remove('scroll-lock');
})

document.getElementById('exit-btn').addEventListener('click', (e) => {
    document.getElementById('burger-navigator-modal').classList.remove('active');
})

const swiperGallery = new Swiper('.gallery-swiper', {

    pagination: {
        el: '.gallery-pagination',
        type: 'fraction',
        clickable: true
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },

    breakpoints: {


        1325: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },

        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 35,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 35,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 40,
        }
    },    
});

const swiperDevelopments = new Swiper('.developments-content__slider', {

    breakpoints: {

        1325: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: false,
            spaceBetween: 50,
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
            spaceBetween: 27,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: true,
            spaceBetween: 35,
        },

        576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            spaceBetween: 50,
        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            spaceBetween: 35,
        }
    },    
    navigation: {
        nextEl: '.dev-button-next',
        prevEl: '.dev-button-prev',
    },

    pagination: {
        el: '.dev-pagination',
        type: 'bullets',
        clickable: true
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
});

const swiperProject = new Swiper('.project-swiper', {

    navigation: {
        nextEl: '.partners-button-next',
        prevEl: '.partners-button-prev',
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

        breakpoints: {

        1325: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: false,
            spaceBetween: 50,
        },    

        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: false,
            spaceBetween: 50,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: false,
            spaceBetween: 34,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
            loop: false,
        }
    },
});

document.querySelectorAll('.yaer-accordeon-list__btn').forEach(function(tabsBtn){
    
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.yaer-accordeon-list__btn').forEach(function(btn){
    btn.classList.remove('yaer-accordeon-list__btn--active')});

    e.currentTarget.classList.add('yaer-accordeon-list__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true 
});

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75975592404668,37.61495546568035],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            controls: [],
            zoom: 14
        }, {
            suppressMapOpenBlock: true
        });

        myMap.controls.add('geolocationControl', {
            float: 'none', 
            position: {
                bottom: '320px',
                right: '30px'
            }
        });

        myMap.controls.add('zoomControl', {
            size: 'small',
            float: 'none',
            position: {
                bottom: '350px',
                right: '30px'
            }
        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([55.7598840564627,37.61417804737697], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/map-point.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });
        
        // myMap.controls.remove('geolocationControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('routeEditor');
        myMap.geoObjects.add(myPlacemark); 
    }

    const element = document.querySelector('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        allowHTML: true,
        itemSelectText: '',
        resetScrollPosition: false, 
        shouldSort: false,
        position: 'bottom',
    });


    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);

    const validation = new JustValidate('#form', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
            color: '#FF5C00',
          },
    });
    validation
        .addField('#name', [
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Поле может содержать минимум 3 символа',
            },
            {
                rule: 'customRegexp',
                value: /^(?=.*[А-яЁё]).*$/,
                errorMessage: 'Недопустимый формат'
            },
            // (?=.*[@$!%*#?&^_-])   ^(?=.*\d)(?=.*[А-яЁё])(?!.*\s).*$
            {
                rule: 'maxLength',
                value: 30,
                errorMessage: 'Поле может содержать максимум 30 символов',
            },
            {
                rule: 'required',
                errorMessage: 'Вы не ввели имя',
            },
        ])
        .addField('#phone', [
            {
                validator: (value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Boolean(Number(phone) && phone.length === 10) //либо >0 
                },
                errorMessage: 'Недопустимый формат',
            }    
        ]);

        new SimpleBar(document.getElementById('header-scroll'), {
            // autoHide: true,
            scrollbarMaxSize: 28
        });

        const btns = document.querySelectorAll(".item-flow-btn");
        const dropdowns = document.querySelectorAll(".header-site__dropdown");
        const activeClassdropdowns = "dropdown__active";
        const activeClassbtns = "btn__active";

        btns.forEach(item => {
            item.addEventListener("click", function() {
                let DropThis = this.parentElement.querySelector(".header-site__dropdown");
                dropdowns.forEach(el => {
                    if (el != DropThis) {
                    el.classList.remove(activeClassdropdowns)
                }
            });

        btns.forEach(el => {
            if (el != this) {
                el.classList.remove(activeClassbtns)
            }
        });
        DropThis.classList.toggle(activeClassdropdowns);
        this.classList.toggle(activeClassbtns);
    });

});

tippy('#tooltips-one', {
    content: '<span style=" font-size: 12px; font-weight: 600; display: inline-block; text-align: center;">Пример современных тенденций современная методология разработки</span>',
    allowHTML: true,
    theme: 'tooltip-style',
    arrow: false,
    delay: [200, 100],
    duration: 300,
    maxWidth: 240,
    trigger: 'click mouseenter',
    hideOnClick: "toggle",
});

tippy('#tooltips-two', {
    content: '<span style=" border-radius: none; font-size: 12px; font-weight: 600; display: inline-block; text-align: center;">В стремлении повысить качество</span>',
    theme: 'tooltip-style',
    allowHTML: true,
    arrow: false,
    delay: [200, 100],
    duration: 300,
    maxWidth: 240,
    trigger: 'click mouseenter',
    hideOnClick: "toggle",
});

tippy('#tooltips-three', {
    content: '<span style=" font-size: 12px; font-weight: 600; display: inline-block; text-align: center;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</span>',
    theme: 'tooltip-style',
    allowHTML: true,
    arrow: false,
    delay: [200, 100],
    duration: 300,
    maxWidth: 240,
    trigger: 'click mouseenter',
    hideOnClick: "toggle",
});

modalOpen.onkeydown = function(e) {
    if(e.keyCode === 13) { // Кнопка Enter
      document.activeElement.click();
    }
};


