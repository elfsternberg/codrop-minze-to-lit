import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

const style = css`
    :host {
        display: inline-block;
        width: 100%;
        background: rgb(228 228 231);
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        padding: 1.5rem;
        margin-bottom: 3rem;
    }

    .text {
        font-size: 1.125rem;
        margin: 0;
    }

    .headline {
        font-size: 1.875rem;
        margin: 0;
    }

    .button {
        margin-top: 2rem;
    }

    .icon {
        width: 32rem;
        height: 32rem;
        opacity: 5%;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(0, 50%);
    }
`;

@customElement("sh-welcome")
export class ShWelcome extends LitElement {
    static styles = [style];

    @property()
    name?: string;

    render() {
        return html`
            <div>
                <p class="text">Welcome back</p>
                <h2 class="headline">${this.name ?? nothing}</h2>
            </div>

            <sh-button class="button"> Set up automation </sh-button>

            <img src="assets/icon-sun.svg" class="icon" />
        `;
    }
}
