import React, { FC } from "react";
import Button, { ButtonProps } from "../CustomButton";

const Example: FC<ButtonProps> = ({
    disabled = false,
    onClick = () => {},
    color = "#000000",
    text_color = "#ffffff",
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
                color={color}
                text_color={text_color}
            />
        </div>
    );
};

export default Example;
