import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import { GetColor } from "../../assets/Colors";
import { TextBody, TextCaption } from "../../assets/fonts/fonts";

export interface CheckboxProps {
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
  min-width: 20px;
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
    min-height: 42px;
    box-sizing: border-box;
    max-width: 100%;
`;

const StyledSpan = styled.span<{ color: string }>`
    font: ${TextCaption};
    color: ${(props) => props.color};
    margin-top: -2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const StyledCheckboxTitle = styled.span`
    font: ${TextBody};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const StyledTextContainer = styled.span<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    max-width: 100%;
    width: 100%;
    flex: 1;
    min-width: 100px;

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
            <CheckboxContainer
                className={`checkbox-wrapper`}
                data-testid="checkbox-label"
            >
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
                    <StyledCheckboxTitle>{title}</StyledCheckboxTitle>

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
