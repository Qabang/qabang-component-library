import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckboxGroup from "../CheckboxGroup";
import Checkbox from "../../Checkbox/Checkbox";

describe("CheckboxGroup component", () => {
    it("CheckboxGroup should render correctly", () => {
        /// Assign
        render(<CheckboxGroup />);

        /// Act
        const element = screen.getByTestId("checkbox-group");

        /// Assert
        expect(element).toBeInTheDocument();
    });

    it("CheckboxGroup should render children correctly", () => {
        /// Assign
        render(
            <CheckboxGroup>
                <Checkbox key="2" title="Example 2" checked={false}></Checkbox>
                <Checkbox key="3" title="Example 3" checked={false}></Checkbox>
                <Checkbox key="4" title="Example 4" checked={false}></Checkbox>
            </CheckboxGroup>,
        );
        /// Act
        const elements = screen.getAllByRole("checkbox");

        /// Assert
        expect(elements.length).equal(3);
    });
});
