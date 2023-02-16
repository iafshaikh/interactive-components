import { css, html } from 'lit-element';
import { Button } from '@spectrum-web-components/button';
import designTokens from '../../shared/design-tokens.json';

class MyButton extends Button {
  static get properties() {
    return {
      label: { type: String },
      active: { type: Boolean },
      disabled: { type: Boolean },
      static: { type: String },
      treatment: { type: String },
      type: { type: String },
      variant: { type: String },
      size: { type: String },
      pill: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        border-radius: 4px;
        cursor: pointer;
        font-family: 'proxima-nova', sans-serif;
        font-size: 14px;
        font-weight: normal;
        padding: 8px 24px;
        line-height: 1em;
      }

      :host([variant="primary"]) {
        background-color: #0B56BF;
        border: 1px solid #0B56BF;
        color: white;
      }

      :host([variant="primary"]:hover),
      :host([variant="primary"]:focus) {
        background-color: #094599;
        border: 1px solid #094599;
      }

      :host([variant="primary"]:active) {
        background-color: #094599;
        color: #B5CCEC;
        border: 1px solid #094599;
      }

      :host([variant="tertiary"]) {
        background-color: #F5F5F5;
        border: 1px solid #DCDCDC;
        color: #191919;
      }

      :host([variant="tertiary"]:hover),
      :host([variant="tertiary"]:focus) {
        background-color: #EDEDED;
        border: 1px solid #DCDCDC;
        color: #191919;
      }

      :host([variant="tertiary"]:active) {
        background-color: #DCDCDC;
        border: 1px solid #B9B9B9;
        color: #191919;
      }

      :host([variant="outline"]) {
        background-color: #fff;
        border: 1px solid #0B56BF;
        color: #0B56BF;
      }

      :host([variant="outline"]:hover),
      :host([variant="outline"]:focus) {
        background-color: #F0F4FA;
        border: 1px solid #0B56BF;
        color: #0B56BF;
      }

      :host([variant="outline"]:active) {
        background-color: #DAE6F6;
        color: #094599;
        border: 1px solid #094599;
        color: #0B56BF;
      }

      :host([variant="tertiary"]) {
        background-color: #F5F5F5;
        border: 1px solid #DCDCDC;
        color: #191919;
      }

      
      :host([variant="tertiary"]:hover),
      :host([variant="tertiary"]:focus) {
        background-color: #EDEDED;
        border: 1px solid #DCDCDC;
        color: #191919;
      }

      :host([variant="tertiary"]:active) {
        background-color: #DCDCDC;
        border: 1px solid #B9B9B9;
        color: #191919;
      }

      :host([variant="destructive"]) {
        background-color: #DB1222;
        border: 1px solid #DB1222;
        color: white;
      }

      :host([variant="destructive"]:hover),
      :host([variant="destructive"]:focus) {
        background-color: #6E0911;
        border: 1px solid #6E0911;
        color: white;
      }

      :host([variant="destructive"]:active) {
        background-color: #42050A;
        color: #F8CFD2;
        border: 1px solid #000000;
        color: #F8CFD2;
      }

      :host([variant="add"]) {
        background-color: #038840;
        border: 1px solid #038840;
        color: white;
      }

      :host([variant="add"]:hover),
      :host([variant="add"]:focus) {
        background-color: #12653C;
        border: 1px solid #12653C;
        color: white;
      }

      :host([variant="add"]:active) {
        background-color: #134531;
        color: #E5F5EC;
        border: 1px solid #000000;
        color: #E5F5EC;
      }

      :host([pill="true"]) {
        border-radius: 24px;
      }

      :host([disabled]) {
        background-color: #F5F5F5;
        border: 1px solid #F5F5F5;
        color: #757575;
        cursor: not-allowed;
      }

      :host([size='s']) {
        font-size: 12px;
        padding: 5px 15px;
      }
      :host([size='l']) {
        font-size: 16px;
        padding: 11px 23px;
      }
    `;
  }

  constructor() {
    super();
    this.setAttribute('role', 'button');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('my-button', MyButton);
