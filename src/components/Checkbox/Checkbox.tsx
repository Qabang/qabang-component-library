import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import { GetColor } from "../../assets/Colors";
import { TextBody, TextCaption } from "../../assets/fonts/fonts";

interface CheckboxProps {
    primary_color?: `#${string}` | "";
    secondary_color?: `#${string}` | "";
    title: string;
    description?: string;
    disabled?: boolean;
    checked: boolean;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    // Hide checkbox visually but remain accessible to screen readers.
    // Source: https://polished.js.org/docs/#hidevisually
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg<{ $primary_color: string }>`
    fill: none;
    stroke: ${(props) => props.$primary_color};
    stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{
    checked: boolean;
    disabled?: boolean;
    $primary_color: string;
    $secondary_color: string;
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-color: ${(props) => (props.checked ? props.$primary_color : props.$secondary_color)};
  border-radius: 4px;
  margin: auto 12px auto 0;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    ${(props) =>
        props.disabled &&
        `
        stroke: #6a6d6e;
    `}
  }
  ${(props) =>
      props.disabled &&
      `
        opacity: 0.3;
        background-color: #d2d9db;
        border: 2px solid #6a6d6e;
    `}
}
`;

const CheckboxContainer = styled.label`
    display: flex;
    align-content: center;
    font: ${TextBody};
`;

const StyledSpan = styled.span<{ color: string }>`
    font: ${TextCaption};
    color: ${(props) => props.color};
    margin-top: -2px;
`;

const StyledTextContainer = styled.span<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.disabled &&
        `
        opacity: 0.6;
        color: #6a6d6e;

        ${StyledSpan} {
          color: #d2d9db;
        }
    `}
`;

const Checkbox: React.FC<CheckboxProps> = ({
    primary_color,
    secondary_color,
    title,
    description,
    disabled,
}) => {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setIsChecked(e.target.checked);
    }

    return (
        <>
            <CheckboxContainer className={`checkbox-wrapper`}>
                <HiddenCheckbox
                    className="hidden"
                    disabled={disabled}
                    checked={isChecked}
                    onChange={(e) => handleOnChange(e)}
                />
                <StyledCheckbox
                    className="visible"
                    disabled={disabled}
                    checked={isChecked}
                    $primary_color={
                        primary_color ? primary_color : GetColor("Primary")
                    }
                    $secondary_color={
                        secondary_color
                            ? secondary_color
                            : GetColor("Secondary")
                    }
                    data-testid="custom-styled-checkbox"
                >
                    <Icon
                        viewBox="0 0 24 24"
                        $primary_color={
                            primary_color ? primary_color : GetColor("Primary")
                        }
                        data-testid="checkmark"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
                <StyledTextContainer disabled={disabled}>
                    {title}

                    <StyledSpan
                        color={
                            primary_color ? primary_color : GetColor("Primary")
                        }
                    >
                        {description}
                    </StyledSpan>
                </StyledTextContainer>
            </CheckboxContainer>
        </>
    );
};
export default Checkbox;
