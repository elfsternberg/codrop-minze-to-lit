import type { Meta, StoryObj } from "@storybook/web-components";

import { html, nothing, TemplateResult } from "lit";

import "../src/sh-accordion.js";
import { ShAccordion } from "../src/sh-accordion.js";

const metadata: Meta<ShAccordion> = {
    title: "ShAccordion",
    component: "sh-accordion",
    argTypes: {
        open: { control: "boolean" },
    },
};

export default metadata;

type StoryProps = ShAccordion & { content?: TemplateResult };
type Story = StoryObj<StoryProps>;

const Template: Story = {
    render: ({ open, content }: StoryProps) => html` <sh-accordion ?open=${open}>${content ?? nothing}</sh-accordion> `,
};

export const Accordion: Story = {
    ...Template,
    args: {
        content: html`<div slot="title">Don't look!</div>
            <div slot="content">I told you not to look but you didn't believe me! Why didn't you believe me?</div>`,
    },
};
