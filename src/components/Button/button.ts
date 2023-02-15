import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class Button extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) variant = '';
  @property({ type: String }) size = '';
  @property({ type: String }) type = '';
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    button {      
      border-radius: 4px;
      cursor: pointer;
      font-family: 'proxima-nova', sans-serif;
      font-size: 14px;
      font-weight: normal;
      padding: 8px 24px;
      line-height: 1em;
    }

    button:disabled {
      background-color: #F5F5F5;
      border: 1px solid #F5F5F5;
      color: #757575;
      cursor: not-allowed;
    }

    button.primary {
      background-color: #0B56BF;
      border: 1px solid #0B56BF;
      color: white;
    }

    button.primary:hover {
      background-color: #094599;
      border: 1px solid #094599;
    }

    button.primary:active {
      background-color: #094599;
      color: #B5CCEC;
      border: 1px solid #094599;
    }

    button.tertiary {
      background-color: #F5F5F5;
      border: 1px solid #DCDCDC;
      color: #191919;
    }
    button.tertiary:hover {
      background-color: #EDEDED;
      border: 1px solid #DCDCDC;
      color: #191919;
    }
    button.tertiary:active {
      background-color: #DCDCDC;
      border: 1px solid #B9B9B9;
      color: #191919;
    }

    button.outline {
      background-color: #fff;
      border: 1px solid #0B56BF;
      color: #0B56BF;
    }
    button.outline:hover {
      background-color: #F0F4FA;
      border: 1px solid #0B56BF;
      color: #0B56BF;
    }
    button.outline:active {
      background-color: #DAE6F6;
      color: #094599;
      border: 1px solid #094599;
      color: #0B56BF;
    }

    button.add {
      background-color: #038840;
      border: 1px solid #038840;
      color: white;
    }
    button.add:hover {
      background-color: #12653C;
      border: 1px solid #12653C;
      color: white;
    }
    button.add:active {
      background-color: #134531;
      color: #E5F5EC;
      border: 1px solid #000000;
      color: #E5F5EC;
    }

    button.destructive {
      background-color: #DB1222;
      border: 1px solid #DB1222;
      color: white;
    }
    button.destructive:hover {
      background-color: #6E0911;
      border: 1px solid #6E0911;
      color: white;
    }
    button.destructive:active {
      background-color: #42050A;
      color: #F8CFD2;
      border: 1px solid #000000;
      color: #F8CFD2;
    }

    button.warning {
      background-color: #ffc107;
      border: 1px solid #ffc107;
      color: white;
    }

    button.info {
      background-color: #17a2b8;
      border: 1px solid #17a2b8;
      color: white;
    }

    button.light {
      background-color: #f8f9fa;
      border: 1px solid #f8f9fa;
      color: black;
    }

    button.dark {
      background-color: #343a40;
      border: 1px solid #343a40;
      color: white;
    }

    button.sm {
      font-size: 12px;
      padding: 5px 15px;
    }

    button.lg {
      font-size: 16px;
      padding: 11px 23px;
    }

    button.pill {
      border-radius: 24px;
    }
  `;

  render() {
    return html`
      <button class="${this.variant} ${this.size} ${this.type}" ?disabled="${this.disabled}">
        ${this.label}
      </button>
    `;
  }
}
