import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const style = css`
    :host {
        width: 6.25rem;
        height: 100vh;
        flex-shrink: 0;
        background: rgb(39 39 42);
        box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
        :host {
            width: 120px;
        }
    }

    .logo {
        width: 100%;
        height: 7.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(82 82 91);
    }

    .nav {
        padding: 2rem 0;
    }

    .nav__entry {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 50%;
        position: relative;
        margin: 1rem 0;
    }

    .nav__entry--active {
        opacity: 100%;
    }

    .nav__entry--active::before {
        content: "";
        width: 0.5rem;
        height: 100%;
        background: rgb(255 255 255);
        border-radius: 0 9999px 9999px 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
`;

@customElement("sh-sidebar")
export class ShSidebar extends LitElement {
    static styles = [style];

    render() {
        return html` <div class="logo">
                <img src="assets/logo.svg" />
            </div>

            <nav class="nav">
                <div class="nav__entry nav__entry--active">
                    <img src="assets/icon-home.svg" />
                </div>

                <div class="nav__entry">
                    <img src="assets/icon-view-grid.svg" />
                </div>

                <div class="nav__entry">
                    <img src="assets/icon-user.svg" />
                </div>

                <div class="nav__entry">
                    <img src="assets/icon-cog.svg" />
                </div>
            </nav>`;
    }
}
