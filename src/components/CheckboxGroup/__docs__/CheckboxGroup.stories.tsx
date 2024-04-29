import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "../CheckboxGroup";
import Checkbox from "../../Checkbox/Checkbox";
import React from "react";

const meta: Meta<typeof CheckboxGroup> = {
    title: "CheckboxGroup",
    component: CheckboxGroup,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const listOfCheckboxes = [
    <Checkbox
        key="1"
        title="Example 1 - With an uneccessary long title text to demsonstrate the trunctation of the text"
        description="This is a checkbox with a irrelevant and boring description just to fill the space and show that we trunctate text that are to long"
        checked={false}
    ></Checkbox>,
    <Checkbox key="2" title="Example 2" checked={false}></Checkbox>,
    <Checkbox key="3" title="Example 3" checked={false}></Checkbox>,
    <Checkbox key="4" title="Example 4" checked={false}></Checkbox>,
    <Checkbox
        key="5"
        title="Example 5"
        description="This is a checkbox"
        checked={false}
    ></Checkbox>,
    <Checkbox
        key="6"
        title="Example 6"
        description="This is a checkbox"
        checked={false}
    ></Checkbox>,
];

export const Regular: Story = {
    args: {
        // children: <Checkbox key="6" title="Example 6" description="This is a checkbox" checked={false}></Checkbox>
        children: listOfCheckboxes,
    },
};
