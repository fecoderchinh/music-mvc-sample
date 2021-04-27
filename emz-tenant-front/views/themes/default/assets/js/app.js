import axios from 'axios';
import _ from 'lodash';
import Vue from 'vue';
import 'slick-carousel';

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}


window.Vue = Vue;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// new Vue({
//     el: '#app',
// });


$(function(){
    $(document).ready(function(){

        // submenu dropdown
        $('.dropdown-menu-level-2 > a').on("click", function(e){
            $('.dropdown-menu-level-2 > ul').toggleClass('show');
            e.stopPropagation();
            e.preventDefault();
        });


        // product slider settings
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            prevArrow: `<div class='slider-nav__prev'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                              <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </div>`,
            nextArrow: `<div class='slider-nav__next'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                              <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </div>`,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ],
        });

        // product quantity
        $('.btn-plus, .btn-minus').on('click', function(e) {
            const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
            const input = $(e.target).closest('.input-group').find('input');
            if (input.is('input')) {
                input[0][isNegative ? 'stepDown' : 'stepUp']()
            }
        })
    });


})
