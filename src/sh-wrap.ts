import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const style = css`
    :host {
        display: inline-block;
        width: 100%;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
        :host {
            margin-bottom: 3rem;
        }
    }

    @media (min-width: 768px) {
        :host {
            width: 100%;
        }
    }

    .headline {
        margin: 0 0 1.5rem;
    }

    .wrap {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 1.5rem;
    }

    :host([vertical]) .wrap {
        flex-direction: column;
    }

    @media (min-width: 768px) {
        .wrap {
            flex-wrap: wrap;
        }

        :host([nowrap]) .wrap {
            flex-wrap: nowrap;
        }
    }
`;

@customElement("sh-wrap")
export class ShWrap extends LitElement {
    static styles = [style];

    @property()
    headline?: string;

    render() {
        return html`
            <h2 class="headline">${this.headline ?? ""}</h2>
            <div class="wrap">
                <slot></slot>
            </div>
        `;
    }
}
