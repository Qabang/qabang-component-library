import styled from "styled-components";

export const Lato =
    "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";
export const Oswald =
    "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap";
export const PlayfairDisplay =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";

export const StyledFontContainer = styled.div<{ heading?: boolean }>`
    @import url(${(props) => (props.heading ? Oswald : Lato)});
`;

export const TextH1 = "normal normal 400 28px/100% Playfair Display, serif";
export const TextH2 = "normal normal 400 28px/200% Lato, sans-serif";
export const TextH3 = "normal normal 300 24px/200% Lato, sans-serif";
export const TextH4 = "normal normal 400 20px/200% Lato, sans-serif";
export const TextAction = "normal normal 300 18px/145% Oswald, sans-serif";
export const TextPreamble = "normal normal 600 16px/145% Oswald, sans-serif";
export const TextBody = "normal normal 300 16px/145% Oswald, sans-serif";
export const TextCaption = "normal normal 300 14px/145% Oswald, sans-serif";

export const StyledH1 = styled.h1<{ heading?: boolean }>`
    @import url(${PlayfairDisplay});
    font: ${TextH1};
`;
