import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

const style = css`
    :host {
        display: inline-block;
        background: rgb(63, 63, 70);
        color: rgb(255 255 255);
        cursor: pointer;
        border-radius: 0.25rem;
        transition: background 0.2s ease-in-out;
        padding: 0.5rem 1rem;
    }

    :host(:hover) {
        background: rgb(82, 82, 91);
    }
`;

@customElement("sh-button")
export class ShButton extends LitElement {
    static styles = [style];

    @property({ type: String })
    href?: string;

    @property({ type: String })
    target?: string;

    @property({ type: String })
    rel?: string;

    render() {
        return html`
            <a href=${ifDefined(this.href)} target=${ifDefined(this.target)} rel=${ifDefined(this.rel)}>
                <slot></slot>
            </a>
        `;
    }
}
