import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomButton from "../CustomButton";
import { MaterialSymbolProps } from "react-material-symbols";

describe("Button component", () => {
    it("Button should render correctly", () => {
        /// Assign
        render(<CustomButton color="#000" text_color="#fff" />);

        /// Act
        const button = screen.getByRole("button");

        /// Assert
        expect(button).toBeInTheDocument();
    });

    it("Button prop icon is set should render icon correctly", () => {
        /// Assign
        const icon: MaterialSymbolProps = { icon: "rocket" };
        render(<CustomButton color="#000" text_color="#fff" icon={icon} />);

        /// Act
        const span = screen.getByText("rocket");

        /// Assert
        expect(span).toBeInTheDocument();
    });

    it("Button prop icon is NOT set should not render icon", () => {
        /// Assign
        render(
            <CustomButton color="#000" text_color="#fff" text="Lorem ipsum" />,
        );

        /// Act & Assert
        expect(screen.queryByText("rocket")).toBeNull();
    });

    it("Button prop text is set should render text correctly", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(
            <CustomButton
                color="#000"
                text_color="#fff"
                text={expected_text}
            />,
        );

        /// Act
        const text = screen.getByText(expected_text);

        /// Assert
        expect(text).toBeInTheDocument();
    });

    it("Button prop text is NOT set should NOT render text", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(<CustomButton color="#000" text_color="#fff" />);

        /// Act & Assert
        expect(screen.queryByText(expected_text)).toBeNull();
    });

    it("Button prop disabled is true should disable button", () => {
        /// Assign
        render(<CustomButton color="#000" text_color="#fff" disabled={true} />);

        /// Act
        const button = screen.getByRole("button");
        button.hasAttribute("disabled");

        /// Assert
        expect(button).toHaveAttribute("disabled");
    });

    it("Button is clicked onClick should have been called", () => {
        /// Assign
        const onClick = vi.fn();
        render(
            <CustomButton color="#000" text_color="#fff" onClick={onClick} />,
        );

        /// Act
        const button = screen.getByRole("button");
        button.click();

        /// Assert
        expect(onClick).toHaveBeenCalled();
    });

    it("Button is NOT clicked onClick should NOT have been called", () => {
        /// Assign
        const onClick = vi.fn();
        render(
            <CustomButton color="#000" text_color="#fff" onClick={onClick} />,
        );

        /// Act & Assert
        expect(onClick).not.toHaveBeenCalled();
    });
});
