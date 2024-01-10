import { LitElement, html } from 'lit';
import {style} from './ToDoItem-styles.js'

export class ToDoITem extends LitElement {
  static get properties() {
    return {
      item: {type: String},
      deleteItem: {type: Function},
    };
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div class="ToDoItem">
        <p class="ToDoItem-Text">${this.item}</p>
        <button class="ToDoItem-Delete"
          @click=${this.deleteItem}>-
        </button>
      </div>
    `;
  }
}
customElements.define('to-do-item', ToDoITem);
