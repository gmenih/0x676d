import {DefaultTheme} from 'styled-components/macro';

const baseTheme: Pick<DefaultTheme, 'fontSizes' | 'spacers'> = {
    spacers: [2, 4, 6, 8, 10, 12, 16, 20, 25, 32],
    fontSizes: [10, 14, 16, 20],
};

export const THEME_DARK: DefaultTheme = {
    ...baseTheme,
    colors: {
        pageBackground: '#374049',
        terminalBackground: '#21262c',
        textDark: '#0b0d0f',
        textLight: '#d3d9de',
        main: '#19619a',
        mainLight: '#3a96df',
    },
};

export const THEME_LIGHT: DefaultTheme = {
    ...baseTheme,
    colors: {
        pageBackground: '#99a6b2',
        terminalBackground: '#21262c',
        textDark: '#0b0d0f',
        textLight: '#d3d9de',
        main: '#19619a',
        mainLight: '#3a96df',
    },
};

export const COLOR_MAIN: string[] = [
    '#e9f3fb',
    '#bddcf4',
    '#91c4ed',
    '#65ade6',
    '#3a96df',
    '#207cc5',
    '#19619a',
    '#12456e',
    '#0b2942',
    '#040e16',
];
export const COLOR_GRAY: string[] = [
    '#f0f2f4',
    '#d3d9de',
    '#b6bfc8',
    '#99a6b2',
    '#7c8c9c',
    '#637383',
    '#4d5966',
    '#374049',
    '#21262c',
    '#0b0d0f',
];