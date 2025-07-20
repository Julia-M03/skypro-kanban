import { css } from "styled-components";

export const Hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`

export const Hover02 = css`
    &:hover {
        color: #33399b;

        &::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
        }
    }
    
`

export const Hover03 = css`
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
        a {
            color: #FFFFFF;
        }
    }
`