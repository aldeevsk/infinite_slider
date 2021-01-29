(function () {
    let track = document.querySelector('.track');
    console.log(track.firstElementChild);
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', scrollPrev);
    next.addEventListener('click', scrollNext);

    function scrollPrev() {
        track.style.transition = 'all linear 0';
        track.lastElementChild.style.width = '0';
        track.prepend(track.lastElementChild);
        track.style.transition = 'all linear 800';
        setTimeout(() => {
            track.firstElementChild.style.width = '1170px';
        }, 0);
    }


    function scrollNext() {
        track.firstElementChild.style.width = "0";
        setTimeout(() => {
            track.append(track.firstElementChild);
        }, 800);
        track.lastElementChild.style.width = '1170px';
        
    }
    
})();