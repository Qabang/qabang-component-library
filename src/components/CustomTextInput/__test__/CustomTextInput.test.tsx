import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CustomTextInput from "../CustomTextInput";
import { MaterialSymbolProps } from "react-material-symbols";

const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
    if (!params.find((p) => p.toString().includes(jsDomCssError))) {
        originalConsoleError(...params);
    }
};

describe("CustomTextInput component", () => {
    it("CustomTextInput should render correctly", () => {
        /// Assign
        render(<CustomTextInput label="text field label" />);

        /// Act
        const textInput = screen.getByRole("textbox");
        const textInputLabel = screen.getByText("text field label");

        /// Assert
        expect(textInput).toBeInTheDocument();
        expect(textInputLabel).toBeInTheDocument();
    });

    it("CustomTextInput prop hide_label is true should render label invisible", () => {
        /// Assign
        render(<CustomTextInput label="text field label" hide_label={true} />);

        /// Act
        const textInputLabel = screen.getByText("text field label");

        /// Assert
        expect(textInputLabel).toBeInTheDocument();
        expect(textInputLabel).toHaveClass("visually-hidden");
    });

    it("CustomTextInput prop icon is set should render icon correctly", () => {
        /// Assign
        const icon: MaterialSymbolProps = { icon: "rocket" };
        render(<CustomTextInput label="text field label" icon={icon} />);

        /// Act
        const span = screen.getByText("rocket");

        /// Assert
        expect(span).toBeInTheDocument();
    });

    it("CustomTextInput prop icon is NOT set should not render icon", () => {
        /// Assign
        render(<CustomTextInput label="text field label" />);

        /// Act & Assert
        expect(screen.queryByText("rocket")).toBeNull();
    });

    it("CustomTextInput prop value is set should render text correctly", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(
            <CustomTextInput label="text field label" value={expected_text} />,
        );

        /// Act
        const text = screen.getByDisplayValue(expected_text);

        /// Assert
        expect(text).toBeInTheDocument();
    });

    it("CustomTextInput prop value is NOT set should render placeholder text", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(
            <CustomTextInput
                label="text field label"
                placeholder_text="hello world"
            />,
        );

        /// Act
        const placeholder = screen.getByPlaceholderText("hello world");

        /// Assert
        expect(screen.queryByText(expected_text)).toBeNull();
        expect(placeholder).toBeInTheDocument();
    });

    it("CustomTextInput prop disabled is true should disable textInput", () => {
        /// Assign
        render(<CustomTextInput label="text field label" disabled={true} />);

        /// Act
        const textInput = screen.getByRole("textbox");

        /// Assert
        expect(textInput).toHaveAttribute("disabled");
    });

    it("CustomTextInput prop readonly is true should render textInput readonly", () => {
        /// Assign
        render(<CustomTextInput label="text field label" readonly={true} />);

        /// Act
        const textInput = screen.getByRole("textbox");

        /// Assert
        expect(textInput).toHaveAttribute("readonly");
    });

    it("CustomTextInput prop onChange is called when value is changed", () => {
        let called = false;

        /// Assign
        render(
            <CustomTextInput
                label="text field label"
                value="Hello World"
                onChange={() => (called = true)}
            />,
        );

        /// Act
        const textInput = screen.getByRole("textbox");
        fireEvent.change(textInput, { target: { value: "Lorem Ipsum" } });

        /// Assert
        expect(called).toBeTruthy();
    });

    it("CustomTextInput prop show_validation is true should invoke validation on textInput", () => {
        /// Assign
        render(
            <CustomTextInput
                label="text field label"
                show_validation={true}
                required={true}
            />,
        );

        /// Act
        const textInput = screen.getByRole("textbox");
        expect(textInput).toBeInvalid();
        fireEvent.change(textInput, { target: { value: "Hello World" } });

        /// Assert
        expect(textInput).toBeValid();
    });

    it("CustomTextInput prop type is set to password should render correctly", () => {
        /// Assign
        render(<CustomTextInput label="text field label" type="password" />);

        /// Act
        const textInput = screen.getByLabelText("text field label");

        /// Assert
        expect(textInput).toHaveAttribute("type");
        expect(textInput.getAttribute("type")).equals("password");
    });

    it("CustomTextInput prop type is set to text should render correctly", () => {
        /// Assign
        render(<CustomTextInput label="text field label" type="text" />);

        /// Act
        const textInput = screen.getByLabelText("text field label");

        /// Assert
        expect(textInput).toHaveAttribute("type");
        expect(textInput.getAttribute("type")).equals("text");
    });
});
