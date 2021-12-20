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

window.addEventListener('load', function () {

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
        const footerForm = document.querySelector('.footer__form');
        const footerText = document.querySelector('.footer__text');
        const menu = document.querySelector('.header__menu');
        const sign = document.querySelector('.header__sign');
        const btn = document.querySelector('.menu-burger-mob');

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
});

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