import styled, { css } from "styled-components";

export const Header = styled.header<{ $scrolled: boolean }>`
    ${({ $scrolled }) => css`
        height: ${ $scrolled ? '86px' : '0px' };
        opacity: ${ $scrolled ? '1' : '0' };
        transform: ${ $scrolled ? 'translateY(0)' : 'translateY(-100%)' };
        transition: all 0.3s ease-out;
        padding:0 clamp(24px,6vw,96px);
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:var(--surface-dark);
        color:var(--light-text);
        position:fixed;
        z-index:10;
        top:0;
        left:0;
        right:0;
        border-bottom:1px solid color-mix(in oklab,var(--light-text) 15%,transparent);
        transtion:all .3s;
        
        @media(max-width:800px){
            height:72px;
            padding:0 20px
        }
    `}
`;

export const Brand = styled.a`
    display:flex;
    align-items:center;
    gap:11px;
    flex-shrink:0;
    text-decoration: none;
    color: #fff;
`;

export const Monogram = styled.span`
    width:38px;
    height:38px;
    display:grid;
    place-items:center;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const BrandWords = styled.span`
    display:flex;
    flex-direction:column;
    line-height:1;
    strong{
        font:700 18px/1 var(--font-display);
        letter-spacing:0
    }
    span{
        font-size:8px;
        letter-spacing:2px;
        margin-top:5px;
        color:var(--light-muted)
    };
`;

export const Nav = styled.nav`
    display:flex;
    gap:34px;
    font-size:12px;
    font-weight:600;
    text-transform:uppercase;
    a {
        text-decoration: none;
        color: #fff;
        transition:color .2s;
        &:hover {
            color:var(--gold)
        }
    }
    
    @media(max-width:900px){
        display:none
    };
`;

export const HeaderCta = styled.a`
    border:1px solid var(--gold);padding:12px 19px;
    text-transform:uppercase;
    text-decoration:none;
    font-size:10px;
    font-weight:700;
    letter-spacing:1px;color:var(--gold)!important;
    transition:.25s;
    
    &:hover{
        background:var(--gold);
        color:var(--surface-dark)!important
    };

    @media(max-width:426px){
        display:none
    };

    
`;