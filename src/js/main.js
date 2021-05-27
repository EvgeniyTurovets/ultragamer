document.addEventListener("DOMContentLoaded", function(event) { 
    // поиск на моб
    let headerMob = document.getElementById('header__mob');
    let searchMobOpen = document.getElementById('search-mob__icon');
    let searchClose = document.getElementById('search-mob__cancel');
    let searchMobInput = document.getElementById('search-mob-input'); 
    
    searchMobOpen.addEventListener('click', function(){
       headerMob.classList.add('search-active');
       searchMobInput.focus()
    })

    searchClose.addEventListener('click', function(){
        headerMob.classList.remove('search-active')
    })

    // бургер меню
    let mobNavBurger = document.getElementById('mob-nav-burger');
    let burger = document.getElementById('burger');
    let burgerClose = document.getElementById('burger-close');
    
    burger.addEventListener('click', function(){
        mobNavBurger.classList.add('active')
    })
    burgerClose.addEventListener('click', function(){
        mobNavBurger.classList.remove('active')
    })

    document.addEventListener('click', function(event) {
        let isClickInsideElement = mobNavBurger.contains(event.target);
  
        if(burger.contains(event.target)){
            isClickInsideElement = 1;
        }

        if (!isClickInsideElement) {
            //Do something click is outside specified element
            mobNavBurger.classList.remove('active')
        }
    });

    let x;
    window.addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
    window.addEventListener('touchend', e => e.changedTouches[0].clientX - x < -50 && swipeLeft());

    function swipeLeft() {
        mobNavBurger.classList.remove('active')
    }
});