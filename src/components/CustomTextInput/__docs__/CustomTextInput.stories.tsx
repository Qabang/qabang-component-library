import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../CustomTextInput";

const meta: Meta<typeof TextInput> = {
    title: "TextInput",
    component: TextInput,
    argTypes: {
        icon: {
            control: { type: "object" },
        },
        color: {
            control: { type: "color" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Regular: Story = {
    args: {
        disabled: false,
        placeholder_text: "input placeholder text",
        label: "This is the label",
        hide_label: false,
    },
};

export const WithIcon: Story = {
    args: {
        color: "",
        disabled: false,
        hide_label: false,
        icon: { icon: "rocket" },
        label: "This is the label",
        placeholder_text: "input placeholder text",
        readonly: false,
        required: false,
        show_validation: false,
        type: "text",
        value: "Hello world",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        disabled: false,
        placeholder_text: "enter password",
        color: "",
        label: "This is the label",
        hide_label: false,
    },
};

export const WithValidation: Story = {
    args: {
        placeholder_text: "input placeholder text",
        value: "Hello world",
        icon: { icon: "rocket" },
        label: "This is the label",
        hide_label: false,
        disabled: false,
        color: "",
        show_validation: true,
        required: true,
    },
};
