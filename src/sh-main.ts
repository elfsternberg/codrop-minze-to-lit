import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const style = css`
    :host {
        height: 100vh;
        flex-grow: 1;
        overflow-y: scroll;
    }
`;

@customElement("sh-main")
export class ShMain extends LitElement {
    static styles = [style];

    render() {
        return html`<div id="main"><slot></slot></main>`;
    }
}
