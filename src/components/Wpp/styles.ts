import styled from "styled-components";

export const WhatsApp = styled.a`
    position:fixed;
    z-index:20;
    right:
    24px;
    bottom:24px;
    height:68px;
    width:68px;
    text-decoration:none;
    background:oklch(0.7 0.2 145);
    color:oklch(1 0 0)!important;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    box-shadow:0 8px 25px color-mix(in oklab,var(--foreground) 25%,transparent);
    font-size:10px;
    text-transform:uppercase;
    font-weight:700;
    transition:.25s;
    svg{
        width:48px;
        height:48px;
        fill:currentColor
    }
    &:hover{
        transform:translateY(-3px)
    }

    @media(max-width:600px){
        width:56px;
        height:56px;
        padding:14px;
    }
`;