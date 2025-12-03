document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__menu-button');
    const menu = document.getElementById('header__nav');
    const menuLinks = document.querySelectorAll('.header__nav-link');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            menu.setAttribute('aria-hidden', isExpanded);
            
            menuLinks.forEach(link => {
                link.setAttribute('tabindex', isExpanded ? '-1' : '0');
            });
            if (!isExpanded) {
                menu.classList.add('open');
            } else {
                menu.classList.remove('open');
            }
        });
        
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuButton.setAttribute('aria-expanded', 'false');
                menu.setAttribute('aria-hidden', 'true');
                menuLinks.forEach(l => l.setAttribute('tabindex', '-1'));
                menu.classList.remove('open');
            });
        });
    }
});