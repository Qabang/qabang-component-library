import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import { GetColor } from "../../assets/Colors";
import { MaterialSymbol, MaterialSymbolProps } from "react-material-symbols";
import "react-material-symbols/rounded";
import {
    StyledFontContainer,
    TextBody,
    TextCaption,
    TextPreamble,
} from "../../assets/fonts/fonts";
import { v4 as uuidv4 } from "uuid";

interface TextInputTypeInterface {
    Primary: string;
    Secondary: string;
}

const InputType: TextInputTypeInterface = {
    Primary: "Primary",
    Secondary: "Secondary",
};

export type TextInputProps = {
    className?: string;
    color?: `#${string}` | "";
    disabled?: boolean;
    hide_label?: boolean;
    icon?: MaterialSymbolProps;
    id?: string;
    label: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder_text?: string;
    readonly?: boolean;
    required?: boolean;
    show_validation?: boolean;
    type?: "text" | "password" | string;
    value?: string;
};

const StyledContainer = styled(StyledFontContainer)<{
    heading?: string;
    show_validation?: string | undefined;
    color?: `#${string}` | "";
}>`
    border: ${(props) =>
            props.color ? props.color : GetColor(InputType.Secondary)}
        solid 1px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    width: 100%;

    .material-symbols {
        display: block;
        margin: auto 0 auto 12px;
        max-width: 24px;
    }

    &:focus-within:has(:not(:active)) {
        outline: 2px solid ${GetColor("CTA")};
    }

    &:has(:active) {
        border: ${(props) =>
                props.color == undefined
                    ? props.color
                    : GetColor(InputType.Primary)}
            solid 1px;
    }

    ${(props) =>
        props.show_validation &&
        `           
            &:has(:valid) {
                box-shadow: -5px 0 ${GetColor("Success")};
                border-left: none;     
            }
            
            &:has(:invalid) {
                box-shadow: -5px 0 ${GetColor("Danger")};
                border-left: none;     
            }
        `}
`;

const MyTextInput: React.FC<TextInputProps> = ({
    className,
    value,
    placeholder_text,
    disabled,
    type,
    onChange,
    readonly,
    id,
    required,
}) => (
    <input
        required={required}
        id={id}
        tabIndex={0}
        className={className}
        type={type}
        disabled={disabled}
        placeholder={placeholder_text}
        value={value}
        onChange={onChange}
        readOnly={readonly}
    />
);

const StyledCustomTextInput = styled(MyTextInput)`
    font: ${TextBody};
    padding: 0 12px;
    border: unset;
    width: 100%;

    &:focus-visible {
        outline: 0 solid transparent;
    }

    &:disabled {
        background-color: #d2d9db;
        color: #6a6d6e;
        border: 0 solid transparent;
        box-shadow: unset;
    }

    &::placeholder {
        font-style: italic;
    }
`;

const StyledErrorMessage = styled(StyledContainer)`
    margin: 8px 1px 8px;
    font: ${TextCaption};
    border: 0 solid transparent;
    color: ${GetColor("Danger")};
`;

const StyledLabel = styled.label`
    display: block;
    font: ${TextPreamble};
    margin-bottom: 8px;
    &.visually-hidden {
        visibility: hidden;
        position: absolute;
    }
`;

const TextInput: React.FC<TextInputProps> = ({
    color,
    disabled,
    hide_label,
    icon,
    id,
    label,
    onChange,
    readonly,
    required,
    show_validation,
    type,
    value,
    ...props
}) => {
    const [currentValue, setCurrentValue] = useState(value ?? "");
    const [error, setError] = useState("");
    id = uuidv4();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setError("");

        if (show_validation && required && !e.target.value) {
            setError("Required");
        }

        if (onChange !== undefined) {
            onChange(e);
        }

        setCurrentValue(e.target.value);
    }

    return (
        <>
            <StyledLabel
                className={hide_label ? "visually-hidden" : "visible"}
                htmlFor={id}
            >
                {label}
            </StyledLabel>
            <StyledContainer
                color={color}
                show_validation={show_validation ? "true" : undefined}
                data-testid="custom-input-wrapper"
            >
                {icon != undefined && icon.icon && (
                    <MaterialSymbol
                        icon={icon.icon}
                        size={icon.size ?? 24}
                        style={icon.style}
                    />
                )}
                <StyledCustomTextInput
                    id={id}
                    type={type ?? "text"}
                    value={currentValue}
                    color={color ?? `#${GetColor(InputType.Secondary)}`}
                    disabled={disabled ? true : false}
                    icon={icon}
                    onChange={(e) => handleChange(e)}
                    show_validation={show_validation}
                    readonly={readonly ?? false}
                    label={label}
                    hide_label={hide_label}
                    required={required}
                    {...props}
                ></StyledCustomTextInput>
            </StyledContainer>

            <StyledErrorMessage
                show_validation={show_validation ? "true" : undefined}
            >
                {error && <span role="alert">{error}</span>}
            </StyledErrorMessage>
        </>
    );
};

export default TextInput;
