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
          color: #ffffff;
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
        .container-cards {
          display: flex;
          justify-content: center;
        }
        .card {
          background-color: #ffffff;
          border-radius: 0.625rem;
          padding: 1rem;
        }
        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        @media (min-width: 768px) {
          .container {
            width: 750px;
          }
        }
        @media (min-width: 992px) {
          .container {
            width: 970px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            width: 1170px;
          }
        }
      `;
    }

  constructor() {
    super();
    this.taskName = '';
    this.data = [
      {task: 'estudiar', completed: true},
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
      <main class="container">
        <h1>TodoList App</h1>
        <div class="container-cards" >
          <div class="card">
            <form @submit="${this.onSubmit}">
              <input 
                type="text"
                placeholder="Nueva Tarea"
                .value="${this.taskName}"
                @input="${e => {this.taskName = e.target.value}}"
              />
              <button type="submit">Agrega Tarea</button>
            </form>
            <todo-list .list=${this.data} ></todo-list>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define('todo-app', TodoApp);