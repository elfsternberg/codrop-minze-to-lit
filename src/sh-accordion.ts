import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

const style = css`
    :host {
        background: rgb(228 228 231);
        font-family: sans-serif;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        user-select: none;
        padding: 1rem;
    }

    .arrow {
        transition: transform 0.2s ease-in-out;
        transform: rotate(0);
    }

    :host([open]) .arrow {
        transform: rotate(180deg);
    }

    ::slotted([slot="details"]) {
        display: none;
        padding: 1rem;
    }

    :host([open]) ::slotted([slot="details"]) {
        display: block;
    }
`;

@customElement("sh-accordion")
export class ShAccordion extends LitElement {
    static styles = [style];

    @property({ type: Boolean, reflect: true })
    open = false;

    render() {
        const toggleOpen = () => {
            this.open = !this.open;
        };

        return html`
            <div class="title" @click=${toggleOpen}>
                <slot name="summary"></slot>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="arrow"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>

            <slot name="details"></slot>
        `;
    }
}
