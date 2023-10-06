import { subscribe } from './eventbus.js';

 export class MyValue extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    
    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = 'Value: 0'; 

    this.shadowRoot.appendChild(valueDisplay);

   
    subscribe('valueChanged', (value) => {
      
      valueDisplay.textContent = `Value: ${value}`;
    });
  }
}

customElements.define('my-value', MyValue);
