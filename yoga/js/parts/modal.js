function modal(){
    let infoTab= document.querySelector('.info'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
        more.addEventListener('click', showModal);
    
            infoTab.addEventListener('click', function (e) {
                let target = e.target;
                if (target && target.classList.contains('description-btn')) {
                showModal();
                }
            });
 
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
 
    function showModal() {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        }
}

module.exports = modal;