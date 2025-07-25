import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const style = css`
    :host {
        width: 100%;
        height: 7.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(212 212 216);
        padding: 0 1.5rem;
    }

    @media (min-width: 768px) {
        :host {
            padding: 0 3rem;
        }
    }

    .headline {
        font-size: 1.875rem;
        font-weight: bold;
        margin: 0;
    }

    .sub-headline {
        font-size: 1.125rem;
        margin: 0;
    }

    ::slotted(nav) {
        display: flex;
        gap: 1rem;
    }
`;

@customElement("sh-header")
export class ShHeader extends LitElement {
    static styles = [style];

    render() {
        return html` <div>
                <h1 class="headline"><slot name="headline"></slot></h1>
                <p class="sub-headline"><slot name="sub-headline"></slot></p>
            </div>

            <slot name="nav"></slot>`;
    }
}
