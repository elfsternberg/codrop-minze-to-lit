import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const style = css`
    :host {
        width: 3rem;
        height: 1.56rem;
        display: flex;
        background: rgb(255 255 255);
        border: 1px solid rgb(228 228 231);
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        padding: 0.125rem;
    }

    .indicator {
        width: 1.25rem;
        height: 1.25rem;
        background: rgb(228 228 231);
        border-radius: 9999px;
        position: relative;
        transform: translateX(0);
        transition: all 0.2s ease-in-out;
    }

    :host([active]) .indicator {
        background: rgb(161, 161, 170);
        transform: translateX(calc(100% + 0.125rem));
    }
`;

@customElement("sh-switch")
export class ShSwitch extends LitElement {
    static styles = [style];

    @property({ type: Boolean, reflect: true })
    active = false;

    constructor() {
        super();
        this.addEventListener("click", () => {
            this.active = !this.active;
        });
    }

    render() {
        return html`<div class="indicator"></div>`;
    }
}
