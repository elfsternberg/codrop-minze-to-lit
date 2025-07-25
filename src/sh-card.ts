import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

const style = css`
    :host {
        width: 12.5rem;
        height: 11.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        background: transparent;
        font-family: sans-serif;
        border-radius: 0.5rem;
        padding: 1.5rem 1.5rem 1rem;
    }

    .top-line {
        font-size: 1rem;
        margin-bottom: 0.125rem;
    }

    .headline {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .value {
        font-size: 2.25rem;
        font-weight: bold;
        margin-top: auto;
    }

    ::slotted(*) {
        margin-top: auto;
        margin-bottom: 0.75rem;
    }
`;

@customElement("sh-card")
export class ShCard extends LitElement {
    static styles = [style];

    @property({ type: String, attribute: "top-line" })
    topLine?: string;

    @property({ type: String })
    headline?: string;

    @property({ type: String })
    value?: string;

    render() {
        return html`
            <div class="top-line">${this.topLine ?? ""}</div>
            <div class="headline">${this.headline ?? ""}</div>
            <slot>
                <div class="value">${this.value ?? ""}</div>
            </slot>
        `;
    }
}
