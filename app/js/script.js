!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
    $(document).ready(function () {
        // *********************************************
        //     Slider start 🚩
        // ****************************
        const tabs = document.querySelectorAll('.tab-item');
        const contents = document.querySelectorAll('.tab-content');
        const form = document.getElementById("lead-capture-form");

        form.addEventListener("submit", handleSubmit);

        function handleSubmit(e){
            e.preventDefault();

            alert("Form has been submitted!");
        }

        // demoSwitcher(); 

        // Demo Switch
        // $('.btn-demo').on('click', demoSwitcher);
        
        // function demoSwitcher(){
        //     $('#main-switch, footer').toggle();
    
        //     const isMainVisible = $('#main-switch').is(':visible');
    
        //     const message = isMainVisible ? "Demo has been deactivated" : "Demo has been activated";

        //     alert(message);
        //  }

        // SECTION: ai-engagement-section slider
        $('.engagement-slider-wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            centerMode: false,
            variableWidth: false,
            prevArrow: '<div class="slider-arrow prev"><img src="assets/images/left_arrow.svg" alt="prev"></div>',
            nextArrow: '<div class="slider-arrow next"><img src="assets/images/right_arrow.svg" alt="next"></div>',
        });

        // SECTION: success-section slider
        $('.success-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<div class="prev-btn"><img src="assets/images/left_arrow.svg" alt="left arrow" /></div>`,
            nextArrow: `<div class="next-btn"><img src="assets/images/right_arrow.svg" alt="right arrow" /></div>`
        });

        // SECTION: use-cases-section tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));



                // Add active class to clicked tab
                tab.classList.add('active');
                contents.forEach((c)=>{
                    if(tab.dataset.tab == c.dataset.tab){
                        c.classList.add('active');
                    };
                })
            });
        });
    });



    // *********************************************
    //     Do not write your code below. ✋😠
    // ****************************
}.call(window, window.jQuery); // jquery initializer
