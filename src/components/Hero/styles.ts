import styled from "styled-components";

export const Hero = styled.section<{$image:string}>`
    min-height:760px;
    height:92vh;
    max-height:940px;
    position:relative;
    display:flex;
    align-items:center;
    background-image:url(${p=>p.$image});
    background-size:cover;
    background-position:center;
    color:var(--light-text);

    @media(max-width:700px){
        min-height:700px;
        height:92svh;
        background-position:61% center;
    }
`;

export const HeroShade = styled.div`
    position:absolute;
    inset:0;
     background:
    linear-gradient(
      90deg,
      color-mix(in oklab, var(--surface-dark) 92%, transparent) 0%,
      color-mix(in oklab, var(--surface-dark) 72%, transparent) 40%,
      color-mix(in oklab, var(--surface-dark) 12%, transparent) 78%
    ),
    linear-gradient(
      0deg,
      color-mix(in oklab, var(--surface-dark) 75%, transparent),
      transparent 45%
    );
`;

export const HeroContent = styled.div`
    position:relative;
    z-index:1;width:min(680px,86%);
    margin-left:clamp(24px,9vw,150px);
    padding-top:70px;
    h1{
        font:600 clamp(45px,5.6vw,84px)/.98 var(--font-display);
        font-size:3em;
        letter-spacing:0;
        margin:24px 0 26px
    }
    em{
        color:var(--gold);
        font-style:italic
    }
    p{
        max-width:590px;
        font-size:18px;
        line-height:1.75;
        color:var(--light-muted)
    }
        
    @media(max-width:700px){
        margin-left:24px;
        width:calc(100% - 48px);
        h1{
            font-size:47px;
        }
    }
`;

export const Eyebrow = styled.div`
    font-size:13px;
    text-transform:uppercase;
    letter-spacing:3px;
    color:var(--gold);
    font-weight:700;
    display:flex;
    align-items:center;
    gap:12px;
        
    &:before{
        content:"";
        width:35px;
        height:1px;
        background:var(--gold)
    }
    `;

export const Actions = styled.div`
    display:flex;
    align-items:center;
    gap:28px;
    margin-top:38px;
    a{
        text-decoration:none;
        color:var(--light-text);
    }
        
    @media(max-width:520px){
        align-items:flex-start;
        flex-direction:column;
        gap:18px;
    }
`;

export const PrimaryLink = styled.a`
    display:inline-flex;
    align-items:center;
    gap:24px;
    background:var(--primary);
    color:var(--primary-foreground)!important;
    padding:18px 22px;
    text-transform:uppercase;
    font-size:11px;
    font-weight:700;
    letter-spacing:.8px;
    transition:.25s;
    &:hover{
        background:var(--wine-warm);
        transform:translateY(-2px)
    }
    span{
        font-size:18px
    }
}`;

export const TextLink = styled.a`
    font-size:12px;
    text-transform:uppercase;
    font-weight:700;
    border-bottom:1px solid var(--light-muted);
    padding-bottom:5px
`;

export const HeroInfo = styled.div`
    position:absolute;
    z-index:1;
    right:clamp(24px,6vw,96px);
    bottom:38px;
    text-align:right;
    display:flex;
    flex-direction:column;
    font-size:10px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:var(--light-muted);
    strong{
        font-size:13px;
        color:var(--light-text);
        margin-top:5px
    }
    @media(max-width:700px){
        display:none
    }
`;
