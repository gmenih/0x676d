import React, {ButtonHTMLAttributes, FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_MAIN, COLOR_WHITE, FONT_MONO, SPACER_BIG, SPACER_SMALL} from '../../style.contants';

const ButtonComponent: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => (
    <button {...props}>{children}</button>
);

export const Button = styled(ButtonComponent)`
    padding: ${SPACER_SMALL}px ${SPACER_BIG}px;
    border: 1px solid ${COLOR_MAIN[5]};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: none;
    color: ${COLOR_MAIN[5]};
    font-family: ${FONT_MONO};
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;

    &:hover {
        background: ${COLOR_MAIN[5]};
        color: ${COLOR_WHITE};
    }
`;
