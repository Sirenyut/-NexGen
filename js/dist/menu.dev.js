"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.header__menu-button');
  var menu = document.getElementById('header__nav');
  var menuLinks = document.querySelectorAll('.header__nav-link');

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      menu.setAttribute('aria-hidden', isExpanded);
      menuLinks.forEach(function (link) {
        link.setAttribute('tabindex', isExpanded ? '-1' : '0');
      });

      if (!isExpanded) {
        menu.classList.add('open');
      } else {
        menu.classList.remove('open');
      }
    });
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menuLinks.forEach(function (l) {
          return l.setAttribute('tabindex', '-1');
        });
        menu.classList.remove('open');
      });
    });
  }
});