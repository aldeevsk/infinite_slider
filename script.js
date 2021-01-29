
(function () {
    let track = document.querySelector('.track');
    console.log(track.firstElementChild);
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');


    prev.addEventListener('click', () => {
        track.style.transition = '0s all linear';
        track.prepend(track.lastElementChild);
        track.style.left = '-1170px';
        setTimeout(() => {
            track.style.transition = '0.8s all linear';
            track.style.left = '0';
        }, 0);

    })


    next.addEventListener('click', () => {
        track.style.transition = '0.8s all linear';
        track.style.left = '-1170px';
        setTimeout(() => {
            track.style.transition = '0s all linear';
            track.append(track.firstElementChild);
            track.style.left = '0';
        }, 800);

    })
    
})();