document.addEventListener("DOMContentLoaded", function(event) { 

    // слайдер товара
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
        lazy: true,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next--vertical',
            prevEl: '.swiper-button-prev--vertical',
        },
        breakpoints: {
        480: {
            direction: "vertical",
            slidesPerView: 4,
        }
        }
    });

    var galleryTop = new Swiper(".gallery-top", {
        direction: "horizontal",
        spaceBetween: 10,
        effect: "fade",
        lazy: true,
        pagination: {
            el: '.swiper-pagination2',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // плашка купить товар
    if(document.getElementById('tovar-fix')){
        let plashka = document.getElementById('tovar-fix')
        let tovarCart = document.getElementById('tovar-cart')
    
        let tovarActionBlock =  document.getElementById('tovar__action__block')
        tovarActionBlockPoint = tovarActionBlock.offsetTop + tovarActionBlock.clientHeight
    
        window.addEventListener('scroll', function(){
            if(window.scrollY > tovarActionBlockPoint){
                plashka.classList.add('active')
            }else{
                plashka.classList.remove('active')
            }
        })
    }
    

    // добавить в избраное и сравнение
    let tovarActionBot = document.querySelectorAll('.tovar__action__bot button')
    tovarActionBot.forEach(el => el.addEventListener('click', function(){
        el.classList.toggle('active')
    }));


    // табы
    
    let tabsLinks = document.querySelectorAll('.tabs__link')

    tabsLinks.forEach(function(el, index){
        el.addEventListener('click', function(){
            if(!el.classList.contains('active')){
                // удалить классы у других
                let parentElements = el.closest('.tabs__links').querySelectorAll('.tabs__link');
                parentElements.forEach(function(el2, index2){
                    if(index2 != index){
                        el2.classList.remove('active')
                    }
                })
                let tabsContents = el.closest('.tabs').querySelectorAll('.tabs__content');
                tabsContents.forEach(function(el2, index2){
                    if(index2 != index){
                        el2.classList.remove('active')
                    }
                })

                // добавить класс нужному
                el.classList.add('active')
                tabsContents[index].classList.add('active')
            }
        })
    })


    // .btn-more
    let btnMore = document.querySelectorAll('.btn-more')
    btnMore.forEach(btn => btn.addEventListener('click', function(){
        btn.classList.toggle('active')
    }))

    if(document.querySelector('.tovar-fix__buy')){
        let tovarFixBuy = document.querySelector('.tovar-fix__buy')
        tovarFixBuy.addEventListener('click', function(){
            tovarFixBuy.classList.add('tovar-in-cart');
        })
    }

    if(document.querySelector('.tovar__action__buy-1-click')){
        let buy1click = document.querySelector('.tovar__action__buy-1-click')
        let modal1Click = document.getElementById('on-click-modal') 
        let modal1ClickClose = document.getElementById('on-click-modal-close') 
        buy1click.addEventListener('click', function(){
            modal1Click.classList.add('active')
        })
        modal1ClickClose.addEventListener('click', function(){
            modal1Click.classList.remove('active')
        })

        modal1Click.addEventListener('click', function(e){   
            if (!modal1Click.querySelector('.town-modal-wrap').contains(e.target)){
                modal1Click.classList.remove('active');
            }
        });
    }
    
    
})
