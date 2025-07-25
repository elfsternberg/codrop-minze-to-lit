import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import "../src/sh-card.js";
import { ShCard } from "../src/sh-card.js";

const metadata: Meta<ShCard> = {
    title: "ShCard",
    component: "sh-card",
    argTypes: {
        topLine: { control: "text" },
        headline: { control: "text" },
        value: { control: "text" },
    },
};

export default metadata;

type Story = StoryObj<ShCard>;

const Template: Story = {
    render: ({ topLine, headline, value }: ShCard) => html`
        <sh-card topLine=${ifDefined(topLine)} headline=${ifDefined(headline)} value=${ifDefined(value)}></sh-card>
    `,
};

export const Card: Story = {
    ...Template,
    args: { headline: "This is the card." },
};

export const StyledCard: Story = {
    args: { headline: "This is the card." },
    render: ({ topLine, headline, value }: ShCard) => html`
        <sh-card
            style="background-color: lightsalmon"
            topLine=${ifDefined(topLine)}
            headline=${ifDefined(headline)}
            value=${ifDefined(value)}
        ></sh-card>
    `,
};
