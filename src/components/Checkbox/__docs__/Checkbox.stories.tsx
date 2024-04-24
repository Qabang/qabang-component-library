import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Checkbox",
    component: Checkbox,
    argTypes: {
        primary_color: {
            control: { type: "color" },
        },
        secondary_color: {
            control: { type: "color" },
        },
        onChange: {
            control: false,
            table: {
                disable: true,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Regular: Story = {
    args: {
        disabled: false,
        title: "This i the title for the checkbox",
        description: "This is the description",
        primary_color: "#7b1f1f",
        secondary_color: "#393c7b",
    },
};
