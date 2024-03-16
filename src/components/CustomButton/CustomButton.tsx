import React, { MouseEventHandler, ReactNode, Children } from "react";
import styled from "styled-components";
import { MaterialSymbol, MaterialSymbolProps } from "react-material-symbols";
import "react-material-symbols/rounded";
import { GetColor } from "../../assets/Colors";

export type ButtonProps = {
    text?: string;
    icon?: MaterialSymbolProps;
    icon_position?: "left" | "right" | string;
    color: `#${string}`;
    text_color: `#${string}`;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

function setWidth(children: ReactNode) {
    let css_value = "fit-content";
    const arrayChildren = Children.toArray(children);

    if (arrayChildren.length == 1 && arrayChildren[0] !== "Button") {
        css_value = "40px";
    } else if (arrayChildren.length == 2 && arrayChildren[1] === "") {
        css_value = "40px";
    }

    return css_value;
}

const CustomStyledButton = styled.button<ButtonProps>`
    border: 0;
    line-height: 1;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    flex-direction: ${(props) =>
        props.icon_position === "right" ? "row-reverse" : "row"};
    gap: 8px;
    height: 40px;
    width: ${(props) => setWidth(props.children)};
    color: ${(props) => props.text_color};
    background-color: ${(props) => props.color};
    padding: 10px 16px;
    ${(props) => props.icon_position === "right" && "padding-left: 18px;"}
    border-radius: 32px;
    &:hover {
        background-color: color-mix(
            in srgb,
            ${(props) => props.color},
            #000 20%
        );
    }
    &:active {
        background-color: color-mix(
            in srgb,
            ${(props) => props.color},
            #000 40%
        );
    }
    &:focus-visible {
        background-color: color-mix(
            in srgb,
            ${(props) => props.color},
            ${GetColor("CTA")} 10%
        );
        outline: 2px solid ${GetColor("CTA")};
    }
    &:disabled {
        background-color: #d2d9db;
        color: #6a6d6e;
        border: 0 solid transparent;
        box-shadow: unset;
    }
`;

const CustomButton: React.FC<ButtonProps> = ({
    text,
    icon,
    icon_position,
    color,
    text_color,
    disabled,
    onClick,
    ...props
}) => {
    return (
        <>
            <CustomStyledButton
                type="button"
                onClick={onClick}
                disabled={disabled ? true : false}
                icon={icon}
                icon_position={icon_position}
                color={color}
                text_color={text_color}
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
            </CustomStyledButton>
        </>
    );
};

export default CustomButton;
