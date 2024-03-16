import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { ButtonType } from "../Button";

const meta: Meta<typeof Example> = {
    title: "Button",
    component: Example,
    argTypes: {
        button_type: {
            options: Object.keys(ButtonType),
            mapping: ButtonType,
            control: { type: "select" },
        },
        icon: {
            control: { type: "object" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Regular: Story = {
    args: {
        text: "Button",
        button_type: ButtonType.Primary,
        disabled: false,
        onClick: () => console.log("Button"),
    },
};

export const TextAndIconLeft: Story = {
    args: {
        text: "text and icon",
        button_type: ButtonType.Primary,
        disabled: false,
        icon: { icon: "image" },
        icon_position: "left",
        onClick: () => console.log("Button"),
    },
};

export const TextAndIconRight: Story = {
    args: {
        text: "text and icon",
        button_type: ButtonType.Primary,
        disabled: false,
        icon: { icon: "rocket" },
        icon_position: "right",
        onClick: () => console.log("Button"),
    },
};

export const Icon: Story = {
    args: {
        text: "",
        button_type: ButtonType.Primary,
        disabled: false,
        icon: { icon: "rocket" },
        onClick: () => console.log("Button"),
    },
};
