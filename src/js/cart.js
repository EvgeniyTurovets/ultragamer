document.addEventListener("DOMContentLoaded", function(event) {
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

    let btnStep1 = document.querySelectorAll('.btn-step1')
    let btnStep2 = document.querySelectorAll('.btn-step2')
    let btnStep3 = document.querySelectorAll('.btn-step3')
    let cartStepNav = document.querySelectorAll('.cart__top__item')
    let cartStep = document.querySelectorAll('.step')
    console.log(btnStep1)

    btnStep1.forEach(btn => btn.addEventListener('click', function(){
        cartStepNav.forEach(function(el,index){
            cartStepNav[index].classList.remove('active')
        });
        cartStep.forEach(function(el,index){
            cartStep[index].classList.remove('active')
        });
        cartStepNav[0].classList.add('active')
        cartStep[0].classList.add('active')
    }))

    btnStep2.forEach(btn => btn.addEventListener('click', function(){
        cartStepNav.forEach(function(el,index){
            cartStepNav[index].classList.remove('active')
        });
        cartStep.forEach(function(el,index){
            cartStep[index].classList.remove('active')
        });
        cartStepNav[1].classList.add('active')
        cartStep[1].classList.add('active')
    }))

    btnStep3.forEach(btn => btn.addEventListener('click', function(){
        cartStepNav.forEach(function(el,index){
            cartStepNav[index].classList.remove('active')
        });
        cartStep.forEach(function(el,index){
            cartStep[index].classList.remove('active')
        });
        cartStepNav[2].classList.add('active')
        cartStep[2].classList.add('active')
    }))

    // сменить город
    if(document.querySelectorAll('.change-town')){
        let changeTownBtns = document.querySelectorAll('.change-town')
        let townModal = document.getElementById('town-modal')
        let townModalClose = document.getElementById('town-modal-close')
        changeTownBtns.forEach(btn => btn.addEventListener('click', function(even){
            even.preventDefault()
            townModal.classList.add('active');
        }))

        townModalClose.addEventListener('click', function(){
            townModal.classList.remove('active');
        })

        townModal.addEventListener('click', function(e){   
            if (!townModal.querySelector('.town-modal-wrap').contains(e.target)){
                townModal.classList.remove('active');
            }
        });
    }
})