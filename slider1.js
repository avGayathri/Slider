import { publish } from './eventbus.js';
 export class MySlider extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        
    const myslider = document.createElement('input');
    myslider.type = 'range';
    myslider.min = '0';
    myslider.max = '100';
    myslider.value = '30';
    myslider.id='slider';

  this.shadowRoot.appendChild(myslider);
  this.sliderElement=this.shadowRoot.getElementById('slider');
  this.sliderElement.addEventListener('input', () => {
  publish('valueChanged',this.sliderElement.value);
});
    }
}