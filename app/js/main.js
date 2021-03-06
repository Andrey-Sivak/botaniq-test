'use strict';

import $ from 'jquery';
import './select2.min';

const mobileWidth = 767;
let isMobile = checkWidth();

window.addEventListener('resize', () => {
    isMobile = checkWidth();
});

setTimeout(() => {
    if (!document.querySelector('.loader')) {
        return;
    }

    const loader = document.querySelector('.loader');
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 300)
    }
}, 2500);


(function loader() {
    if (!document.querySelector('.loader')) {
        return;
    }

    const loader = document.querySelector('.loader');

    if (loader.classList.contains('active')) {
        loader.classList.remove('active');
    }

    setTimeout(() => {
        loader.parentElement.removeChild(loader);
    }, 1500);

})();

(function menu() {
    const footerForm = document.querySelector('.footer__form') || null;
    const footerText = document.querySelector('.footer__text') || null;
    const menu = document.querySelector('.header__menu') || null;
    const sign = document.querySelector('.header__sign') || null;
    const btn = document.querySelector('.menu-burger-mob') || null;

    if (!footerForm || !footerText || !menu || !sign || !btn) return;

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        this.classList.toggle('active');
        footerForm.classList.toggle('active');
        footerText.classList.toggle('active');
        menu.classList.toggle('active');
        sign.classList.toggle('active');
    })
})();

(function select() {

    if($('.select').length > 1) {
        $('select').each(function() {
            let $this = $(this).not('.select-search');
            let parent = $(this).not('.select-search').parents('.select');
            $this.select2({
                minimumResultsForSearch: Infinity,
                dropdownParent: parent
            });
        });
        $('.select-search').each(function() {
            let $this = $(this);
            let parent = $(this).parents('.select');
            $this.select2({
                dropdownParent: parent
            });
        });
    } else {
        $('select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.select')
        });
    }

    $('#select').on('change', function () {
        const link = $(this).val();
        window.open(link, '_blank').focus();
    })
})();

(function scroll() {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                && window.location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 300, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus();
                        };
                    });
                }
            }
        });
})();

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}

function scrollTo(id) {
    const element = document.getElementById(id);

    const y = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}