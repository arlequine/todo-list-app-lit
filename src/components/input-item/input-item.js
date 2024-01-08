import { LitElement, html } from 'lit';

export class InputItem extends LitElement {

  static properties() {
    return {
      value: { type: String },
    };
  }

  render() {
    return html``;
  }
}
customElements.define('input-item', InputItem);
