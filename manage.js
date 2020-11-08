export class ravenSlider {

    constructor(opts) {
        const defaultOpts = {
            timerAllow: true,
            timerTime: 5000,
            generateDots : true,
            generateArrows: true
        };

        this.options = Object.assign({}, defaultOpts, opts);

        this.slider = document.querySelector('#ravenSlider');
        this.slideCount = 0;

        this.slideList = document.querySelector('.slider__list');
        this.slide = document.querySelectorAll('.slider__slide');

        this.slidePhotoList = document.querySelector('.slider__photo_list');
        this.slidePhoto = document.querySelectorAll(".slider__image");

        this.dots = [];
        this.time = null;

        if (this.options.generateDots)
            this.createDots();

        if (this.options.generateArrows)
            this.createArrows();

        this.changeSlide(this.slideCount);
    }
    /*
        Create dots
    */
    createDots() {

        const groupDots = document.createElement('div');
        groupDots.classList.add('slider__dots');
   

        for (let i=0; i<this.slide.length; i++)
        {
            const dot = document.createElement('div');
            dot.classList.add('slider__dot_container');

            const spanDot = document.createElement('span');
            spanDot.classList.add('slider__dot');
            dot.appendChild(spanDot);

            groupDots.appendChild(dot); 
            this.dots.push(spanDot);

            this.dots[i].addEventListener('click', () => {
                this.slideCount = i;
                this.changeSlide(i);
            });
        }
        this.slider.appendChild(groupDots);

        this.dots[0].classList.add('active');
    }
    /*
        Change slide
    */
    changeSlide(slideNumber)
    {
        this.dots.forEach(dot => {
            dot.classList.remove("active");
            dot.setAttribute("aria-hidden", true);
        });

        this.slidePhoto.forEach(slide => {
            slide.classList.remove("active");
            slide.setAttribute("aria-hidden", true);
        });

        this.slide.forEach(slide => {
            slide.classList.remove("active");
            slide.setAttribute("aria-hidden", true);
        });

        this.slide[slideNumber].classList.add("active");
        this.slide[slideNumber].setAttribute("aria-hidden", false);

        this.slidePhoto[slideNumber].classList.add("active");
        this.slidePhoto[slideNumber].setAttribute("aria-hidden", false);

        if (this.options.generateDots)
        {
            this.dots[slideNumber].classList.add("active");
            this.dots[slideNumber].setAttribute("aria-hidden", false);
        }
   
        this.slideList.style.transform = `translateX(-${slideNumber}00%)`;
        this.slidePhotoList.style.transform = `translateX(-${slideNumber}00%)`;

        if (this.options.timerAllow)
        {
            clearInterval(this.time);
            this.time = setTimeout(() => this.nextSlide(), this.options.timerTime)
        }
    }
    /*
        Create arrows buttons
    */
    createArrows()
    {
        const groupArrows = document.createElement('div');
        groupArrows.classList.add('slider__buttons');

        const arrowPrev = document.createElement('button');
        arrowPrev.classList.add('slider__button');
        arrowPrev.classList.add('slider__prev');
        arrowPrev.setAttribute("aria-label", "Poprzedni wpis");
        arrowPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>';

        groupArrows.appendChild(arrowPrev);

        const arrowNext = document.createElement('button');
        arrowNext.classList.add('slider__button');
        arrowNext.classList.add('slider__next');
        arrowNext.setAttribute("aria-label", "Następny wpis");
        arrowNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>';

        groupArrows.appendChild(arrowNext);

        this.slider.appendChild(groupArrows);

        arrowNext.addEventListener("click", this.nextSlide.bind(this));
        arrowPrev.addEventListener("click", this.previousSlide.bind(this));
    }
    /*
        Next slide
    */
    nextSlide()
    {
        this.slideCount === this.slide.length-1 ? this.slideCount = 0 : this.slideCount++;
        this.changeSlide(this.slideCount);
    }
    /*
        Previous slide
    */
    previousSlide()
    {
        this.slideCount === 0 ? this.slideCount = this.slide.length-1 : this.slideCount--;
        this.changeSlide(this.slideCount);
    }

}
