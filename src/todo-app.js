import { LitElement, html, css } from 'lit';
import './components/todo-list/todo-list.js'
import './components/list-item/list-item.js'

class TodoApp extends LitElement {

  static get properties() {
    return {
      data: { type: Array },
      taskName: { type: String }
    }
  }

  static get styles() {
    return css`
        h1 {
          font-size: 48px;
          color: #008080;
          font-family: Helvetica;
          text-align: center;
        }
        form {
          display: flex;
          justify-content: center
        }
        label {
          display: flex;
          flex-direction: column;
          font-family: Helvetica;
          font-size: 16px;
        }
        input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid;
          margin: 0.5rem 1px;
        }
        button {
          border: none;
          background-color: #008080;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          margin: 0.5rem 0;
          height: calc(2rem + 5px);
          align-self: flex-end;
        }
        todo-list {
          display: flex;
          justify-content: center;
        }
      `;
    }

  constructor() {
    super();
    this.taskName = '';
    this.data = [
      {task: 'estudiar', completed: false},
      {task: 'ejercicio', completed: false},
      {task: 'Videojuegos', completed: false},
      {task: 'doctor', completed: false},
    ];
  }

  onSubmit(e) {
    e.preventDefault()
    this.data = [...this.data, {task: this.taskName, completed: false}]
    this.taskName = ''
  }

  render() {
    return html`
      <main>
        <h1>TodoList App</h1>
        <form @submit="${this.onSubmit}">
          <label>
            Nombre de la tarea
            <input 
              type="text"
              placeholder="Nueva Tarea"
              .value="${this.taskName}"
              @input="${e => {this.taskName = e.target.value}}"
            />
          </label>
          <button type="submit">Agrega Tarea</button>
        </form>
        <todo-list .list=${this.data} ></todo-list>
      </main>
    `;
  }
}

customElements.define('todo-app', TodoApp);