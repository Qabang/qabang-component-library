import React, { MouseEventHandler, ReactNode, Children } from "react";
import styled from "styled-components";
import { GetColors, GetColor } from "../../assets/Colors";
import { MaterialSymbol, MaterialSymbolProps } from "react-material-symbols";
import "react-material-symbols/rounded";

interface ButtonTypeInterface {
    Primary: string;
    Secondary: string;
    CTA: string;
    Danger: string;
    Success: string;
}

export const ButtonType: ButtonTypeInterface = {
    Primary: "Primary",
    Secondary: "Secondary",
    CTA: "CTA",
    Danger: "Danger",
    Success: "Success",
};

export type ButtonProps = {
    text?: string;
    icon?: MaterialSymbolProps;
    icon_position?: "left" | "right" | string;
    button_type?: ButtonTypeInterface | string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const colors = GetColors();

function getTextColor(button_type: ButtonTypeInterface | string | undefined) {
    if (button_type === undefined) {
        return;
    }

    if (
        button_type == "Secondary" ||
        button_type == "Info" ||
        button_type == "Warning" ||
        button_type == "CTA"
    ) {
        return GetColor("Contrast");
    }

    return GetColor("Main");
}

function getButtonColor(button_type: ButtonTypeInterface | string | undefined) {
    if (!button_type) {
        return;
    }

    return colors[button_type as keyof ButtonTypeInterface];
}

function setWidth(children: ReactNode) {
    let css_value = "fit-content";
    const arrayChildren = Children.toArray(children);

    if (arrayChildren.length == 1) {
        css_value = "40px";
    } else if (arrayChildren.length == 2 && arrayChildren[1] === "") {
        css_value = "40px";
    }

    return css_value;
}

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: ${(props) =>
        props.icon_position === "right" ? "row-reverse" : "row"};
    gap: 8px;
    height: 40px;
    width: ${(props) => setWidth(props.children)};
    color: ${(props) => getTextColor(props.button_type)};
    background-color: ${(props) => getButtonColor(props.button_type)};
    padding: 10px 16px;
    ${(props) => props.icon_position === "right" && "padding-left: 18px;"}
    border-radius: 32px;
    &:hover {
        background-color: color-mix(
            in srgb,
            ${(props) => getButtonColor(props.button_type)},
            #000 20%
        );
    }
    &:active {
        background-color: color-mix(
            in srgb,
            ${(props) => getButtonColor(props.button_type)},
            #000 40%
        );
    }
    &:focus-visible {
        background-color: color-mix(
            in srgb,
            ${(props) => getButtonColor(props.button_type)},
            ${GetColor("CTA")} 10%
        );
        outline: 2px solid ${GetColor("CTA")};
    }
`;

const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    icon_position,
    button_type,
    disabled,
    onClick,
    ...props
}) => {
    return (
        <>
            <StyledButton
                type="button"
                onClick={onClick}
                button_type={button_type ?? ButtonType.Primary}
                disabled={disabled ?? false}
                icon={icon}
                icon_position={icon_position}
                {...props}
            >
                {icon != undefined && icon.icon && (
                    <MaterialSymbol
                        icon={icon.icon}
                        size={icon.size ?? 20}
                        style={icon.style}
                    />
                )}
                {text}
            </StyledButton>
        </>
    );
};

export default Button;
