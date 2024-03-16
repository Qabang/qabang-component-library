import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
    title: "CustomButton",
    component: Example,
    argTypes: {
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
        color: "#613587",
        text_color: "#ffffff",
        disabled: false,
        onClick: () => console.log("Button"),
    },
};

export const TextAndIconLeft: Story = {
    args: {
        text: "text and icon",
        color: "#613587",
        text_color: "#ffffff",
        disabled: false,
        icon: { icon: "image" },
        icon_position: "left",
        onClick: () => console.log("Button"),
    },
};

export const TextAndIconRight: Story = {
    args: {
        text: "text and icon",
        color: "#613587",
        text_color: "#ffffff",
        disabled: false,
        icon: { icon: "rocket" },
        icon_position: "right",
        onClick: () => console.log("Button"),
    },
};

export const Icon: Story = {
    args: {
        text: "",
        color: "#613587",
        text_color: "#ffffff",
        disabled: false,
        icon: { icon: "rocket" },
        onClick: () => console.log("Button"),
    },
};
