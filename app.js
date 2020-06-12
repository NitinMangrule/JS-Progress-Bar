const barElement = document.querySelector('.bar');

function updateProgressBar() {
    //barElement.style.width = '0%';
    let width = 0;
    let stopProgressBar = setInterval(() => {
        if (width >= 100) {
            width = 0;
            clearInterval(stopProgressBar);
        } else {
            width++;
            barElement.style.width = width + '%';
        }
    }, 10);
}

const barOne = document.querySelector('.barOne');

function fillBar(sec) {
    barOne.style.transition = `${sec}s linear width`;
    barOne.style.width = '100%';
}