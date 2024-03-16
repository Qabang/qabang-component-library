import React, { FC } from "react";
import Button, { ButtonProps, ButtonType as btnType } from "../Button";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => {},
    button_type = btnType.CTA,
    icon = undefined,
    text = "Button-Example",
    icon_position = "left",
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Button
                icon={icon}
                icon_position={icon_position}
                text={text}
                disabled={disabled}
                onClick={onClick}
                button_type={button_type}
            />
        </div>
    );
};

export default Example;
