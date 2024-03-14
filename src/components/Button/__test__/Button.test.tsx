import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button, { ButtonType } from "../Button";
import { MaterialSymbolProps } from "react-material-symbols";

describe("Button component", () => {
    it("Button should render correctly", () => {
        /// Assign
        render(<Button button_type={ButtonType.Primary} />);

        /// Act
        const button = screen.getByRole("button");

        /// Assert
        expect(button).toBeInTheDocument();
    });

    it("Button prop icon is set should render icon correctly", () => {
        /// Assign
        const icon: MaterialSymbolProps = { icon: "rocket" };
        render(<Button button_type={ButtonType.Primary} icon={icon} />);

        /// Act
        const span = screen.getByText("rocket");

        /// Assert
        expect(span).toBeInTheDocument();
    });

    it("Button prop icon is NOT set should not render icon", () => {
        /// Assign
        render(<Button button_type={ButtonType.Primary} text="Lorem ipsum" />);

        /// Act & Assert
        expect(screen.queryByText("rocket")).toBeNull();
    });

    it("Button prop text is set should render text correctly", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(
            <Button button_type={ButtonType.Primary} text={expected_text} />,
        );

        /// Act
        const text = screen.getByText(expected_text);

        /// Assert
        expect(text).toBeInTheDocument();
    });

    it("Button prop text is NOT set should NOT render text", () => {
        /// Assign
        const expected_text = "Lorem Ipsum";
        render(<Button button_type={ButtonType.Primary} />);

        /// Act & Assert
        expect(screen.queryByText(expected_text)).toBeNull();
    });

    it("Button prop disabled is true should disable button", () => {
        /// Assign
        render(<Button button_type={ButtonType.Primary} disabled={true} />);

        /// Act
        const button = screen.getByRole("button");
        button.hasAttribute("disabled");

        /// Assert
        expect(button).toHaveAttribute("disabled");
    });

    it("Button is clicked onClick should have been called", () => {
        /// Assign
        const onClick = vi.fn();
        render(<Button button_type={ButtonType.Primary} onClick={onClick} />);

        /// Act
        const button = screen.getByRole("button");
        button.click();

        /// Assert
        expect(onClick).toHaveBeenCalled();
    });

    it("Button is NOT clicked onClick should NOT have been called", () => {
        /// Assign
        const onClick = vi.fn();
        render(<Button button_type={ButtonType.Primary} onClick={onClick} />);

        /// Act & Assert
        expect(onClick).not.toHaveBeenCalled();
    });
});
