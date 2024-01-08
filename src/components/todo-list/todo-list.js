import { LitElement, html, css } from 'lit';

export class TodoList extends LitElement {

  static get properties() {
    return {
      list: { state: true },
      taskName: { type: String }
    };
  }

  static get styles() {
    return css`
      .list-contain {
        width: 50%
      }
    `
  }

  constructor() {
    super();
    this.taskName = '';
    this.list = []
  }

  
  
  render() {
    return html`
      <div class="list-contain">
        <ul class="list">
          ${
            this.list.length === 0
            ? html`<div class="no-todos">No tienes tareas pendientes</div>`
            : this.list.map((item) => html`
              <list-item task=${item.task} .completed=${item.completed} ></list-item>
          `)
        }
        </ul>
      </div>
    `;
  }
}
customElements.define('todo-list', TodoList);
