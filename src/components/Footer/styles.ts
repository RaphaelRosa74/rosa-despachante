 import styled from "styled-components";
 
 export const Footer = styled.footer`
    background:var(--surface-dark);
    color:var(--light-text);
    padding:55px clamp(24px,9vw,150px);
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    gap:30px;
    
    p{
      color:var(--light-muted);
      font-size:12px;
      text-align:center;
    }
    
    small{
      font-size:9px;
      color:var(--light-muted);
      text-align:right;
    }
    
    @media(max-width:750px){
      grid-template-columns:1fr;
      text-align:center;
      justify-items:center;
      small{
        text-align:center;
      }
    }
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
    border:1px solid var(--gold);
    display:grid;
    place-items:center;
    color:var(--gold);
    font:700 25px/1 var(--font-display);
    transform:rotate(-3deg);
`;

export const BrandWords = styled.span`
    display:flex;
    flex-direction:column;
    line-height:1;
    strong{font:700 18px/1 var(--font-display);
    letter-spacing:0}span{font-size:8px;
    letter-spacing:2px;
    margin-top:5px;color:var(--light-muted)};
`;

 