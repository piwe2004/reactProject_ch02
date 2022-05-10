export default class ImagesSlider {
    #currentPosition = 0;
    #slideNumber = 0;
    #slideWidth = 0;
    sliderWrapEl;
    sliderListEl;
    nextBtnEl;
    prevBtnEl
    constructor() {
        this.assignElement();
        this.initSliderNumber();
        this.initSliderWidth();
        this.initSliderListWidth()
        this.addEvent();
    }

    assignElement (){
        this.sliderWrapEl = document.getElementById('slider-wrap');
        this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
        this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
        this.prevBtnEl = this.sliderWrapEl.querySelector('#previous');
    }

    initSliderNumber(){
        this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
    }

    initSliderWidth(){
        this.#slideWidth = this.sliderWrapEl.clientWidth;
    }

    initSliderListWidth(){
        this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`
    }

    addEvent(){
        this.nextBtnEl.addEventListener('click', this.movoToRight.bind(this))
        this.prevBtnEl.addEventListener('click', this.moveToLeft.bind(this))
    }

    movoToRight(){
        this.#currentPosition +=1;
        if(this.#currentPosition === this.#slideNumber){
            this.#currentPosition = 0;
        }
        this.sliderListEl.style.left = `-${this.#slideWidth * this.#currentPosition}px`;
    }

    moveToLeft(){
        this.#currentPosition -=1;
        if(this.#currentPosition === -1){
            this.#currentPosition = this.#slideNumber-1;
        }
        this.sliderListEl.style.left = `-${this.#slideWidth * this.#currentPosition}px`;
    }
}