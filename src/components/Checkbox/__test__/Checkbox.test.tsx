import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
    it("Checkbox should render correctly", () => {
        /// Assign
        render(<Checkbox title={"Title example"} checked={false} />);

        /// Act
        const element = screen.getByRole("checkbox");

        /// Assert
        expect(element).toBeInTheDocument();
    });

    it("Custom checkbox should render correctly", () => {
        /// Assign
        render(<Checkbox title={"Title example"} checked={false} />);

        /// Act
        const element = screen.getByTestId("custom-styled-checkbox");

        /// Assert
        expect(element).toBeInTheDocument();
    });

    it("Custom checkbox should contain one icon element", () => {
        /// Assign
        render(<Checkbox title={"Title example"} checked={false} />);

        /// Act
        const element = screen.getByTestId("custom-styled-checkbox");
        const icon = screen.getByTestId("checkmark");

        /// Assert
        expect(icon.tagName).equal("svg");
        expect(element.contains(icon)).toBeTruthy;
    });

    it("Checkbox should contain a label", () => {
        const expected = "Title example";

        /// Assign
        render(<Checkbox title={"Title example"} checked={false} />);

        /// Act
        const label = screen.getByText("Title example");

        /// Assert
        expect(label.innerHTML).toContain(expected);
    });

    it("Checkbox description is set should render correctly", () => {
        const expected = "Lorem ipsum";

        /// Assign
        render(
            <Checkbox
                title={"Title example"}
                description="Lorem ipsum"
                checked={false}
            />,
        );

        /// Act
        const label = screen.getByText("Title example");

        /// Assert
        expect(label.innerHTML).toContain(expected);
    });

    it("Checkbox is checked when onChange is called", () => {
        /// Assign
        render(
            <Checkbox
                title={"Title example"}
                description="Lorem ipsum"
                checked={false}
            />,
        );

        /// Act
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();

        fireEvent.change(checkbox, { target: { checked: true } });

        /// Assert
        expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("Checkbox is disabled when disabled prop is true", () => {
        /// Assign
        render(
            <Checkbox
                title={"Title example"}
                description="Lorem ipsum"
                checked={false}
                disabled={true}
            />,
        );

        /// Act
        const checkbox = screen.getByRole("checkbox");

        /// Assert
        expect(checkbox).toBeDisabled;
    });
});
