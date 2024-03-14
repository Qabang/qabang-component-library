interface ColorInterface {
    Primary: string;
    Secondary: string;
    Canvas: string;
    Contrast: string;
    CTA: string;
    Main: string;
    Info: string;
    Success: string;
    Warning: string;
    Danger: string;
}

const ColorsLightTheme: ColorInterface = {
    Primary: "#1F7A8C",
    Secondary: "#BFDBF7",
    Canvas: "#EDF6F9",
    Contrast: "#01161E",
    CTA: "#EE9B00",
    Main: "#FFFFFF",
    Info: "#EFF1FC",
    Success: "#69B387",
    Warning: "#FEF98C",
    Danger: "#BC4B52",
};

const ColorsDarkTheme: ColorInterface = {
    Primary: "#1F7A8C",
    Secondary: "#BFDBF7",
    Canvas: "#EDF6F9",
    Contrast: "#01161E",
    CTA: "#EE9B00",
    Main: "#FFFFFF",
    Info: "#EFF1FC",
    Success: "#69B387",
    Warning: "#FEF98C",
    Danger: "#BC4B52",
};

export function GetColors() {
    const darkmode: boolean = window.localStorage.getItem("theme") === "dark";
    if (darkmode) {
        return ColorsDarkTheme;
    }

    return ColorsLightTheme;
}

export function GetColor(key: string) {
    const darkmode: boolean = window.localStorage.getItem("theme") === "dark";

    if (darkmode) {
        return ColorsDarkTheme[key as keyof ColorInterface];
    }

    return ColorsLightTheme[key as keyof ColorInterface];
}
