import { LitElement, html, css } from 'lit';

export class ListItem extends LitElement {
  static get properties() {
    return {
      task: { type: String },
      completed: { type: Boolean }
    }
  }

  static get styles() {
    return css`
     .todo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        background-color: #75bdb1;
        color: white;
        font-family: Helvetica;
        font-size: 16px;
        margin: .5rem;
        border-radius: 5px;
      }
      .completed {}

      input {
        margin: 0.5rem;
      }
    `;
  }

  constructor() {
    super()
    this.task = 'Default Task'
    this.completed = false
  }

  render() {
    return html`
      <label class="todo">
        <input 
          type="checkbox" 
          .checked=${this.completed} 
          @change=${this._handleCheckboxChange} 
        />
        <div 
          class="todo-text ${this.completed ? 'completed' : ''}">
            ${this.completed ? 'completed' : ''}
            ${this.task}
          </div>
      </label>
    `;
  }
}
customElements.define('list-item', ListItem);
