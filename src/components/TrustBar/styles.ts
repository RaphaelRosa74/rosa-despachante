import styled from "styled-components";

export const TrustBar = styled.section`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    padding:30px clamp(24px,9vw,150px);
    background:var(--primary);color:var(--primary-foreground);
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        border-right:1px solid color-mix(in oklab,var(--primary-foreground) 25%,transparent);
        &:last-child{
        border:0
        }
    }
    b{
    text-transform:uppercase;
    font:600 16px var(--font-display)
    }
    span{
    font-size:10px;
    letter-spacing:1px;
    margin-top:5px;
    color:color-mix(in oklab,var(--primary-foreground) 70%,transparent)
    }
    @media(max-width:650px){
    grid-template-columns:1fr;
    gap:20px;
    div{
        border-right:0;
        border-bottom:1px solid color-mix(in oklab,var(--primary-foreground) 20%,transparent);
        padding-bottom:18px;
        &:last-child{
            padding:0
        }
    }
    }
}`    