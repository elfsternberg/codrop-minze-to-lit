import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const style = css`
    :host {
        width: 100%;
        min-height: 100vh;
        display: flex;
    }
`;

@customElement("sh-app")
export class ShApp extends LitElement {
    static styles = [style];

    render() {
        return html`<slot></slot>`;
    }
}
