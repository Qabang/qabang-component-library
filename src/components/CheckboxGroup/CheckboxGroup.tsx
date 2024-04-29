import React from "react";
import styled from "styled-components";

export interface CheckboxGroupProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

const StyledCheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ children }) => {
    return (
        <>
            <StyledCheckboxGroup
                className="checkbox-group"
                data-testid="checkbox-group"
            >
                {children}
            </StyledCheckboxGroup>
        </>
    );
};
export default CheckboxGroup;
