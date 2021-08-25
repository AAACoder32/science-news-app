let mainContainer = document.querySelector('.main-container');
const newsSource = document.querySelector('.news-source');
const hamburger = document.querySelector('.ham-icon');

let isActive = false;
hamburger.addEventListener('click', () => {
    if (!isActive) {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        newsSource.style.animation = 'showNavList .3s ease-in-out';
        newsSource.style.transform = 'translateX(0)';
        mainContainer.style.pointerEvents = 'none';

        isActive = true;
    } else {
        newsSource.style.animation = 'hideNavList .3s ease-in-out';
        newsSource.style.transform = 'translateX(-73vw)';

        isActive = false;
    }
});