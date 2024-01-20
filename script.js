const switchButton = document.querySelector('#toggle');
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {

        document.documentElement.classList.remove('transition');
    }, 200);
};
switchButton.addEventListener('click', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.querySelector('.card__header > h1').textContent =
            'Dark theme';
        trans();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('.card__header > h1').textContent =
            'Light theme';
        trans();
    }
});