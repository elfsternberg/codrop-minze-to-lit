import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const style = css`
    :host {
        display: block;
        margin: 0 auto;
        max-width: 100rem;
        padding: 1.5rem 0.75rem;
    }

    @media (min-width: 768px) {
        :host {
            padding: 3rem 1.5rem;
        }
    }
`;

@customElement("sh-content")
export class ShContent extends LitElement {
    static styles = [style];

    render() {
        return html`<div id="main"><slot></slot></div>`;
    }
}
