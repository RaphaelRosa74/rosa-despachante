import styled from "styled-components";
import { PrimaryLink } from "../Hero/styles";

export const SectionTag = styled.div`
    font-size:10px;
    text-transform:uppercase;
    letter-spacing:2.5px;color:var(--primary);
    font-weight:700;
    margin-bottom:22px
`;

export const About = styled.section`
    padding:110px clamp(24px,9vw,150px);
    max-width:1500px;
    margin:auto
`;

export const AboutGrid = styled.div`
    display:grid;
    grid-template-columns:1.05fr .8fr;
    gap:10vw;
    
    h2{
        font:600 clamp(38px,4vw,60px)/1.08 var(--font-display);
        margin:0;
        color:var(--wine-deep);
    }

    p{
        font-size:15px;
        line-height:1.8;
        margin:0 0 14px;
        color:var(--muted-foreground);
    }

    svg {
        opacity: 0.7;
    }

    @media(max-width:750px){
        grid-template-columns:1fr;
        gap:38px;
        justify-items: center;

        svg {
            opacity: 0.07;
            position: absolute;
            width: 19rem;
        }
    }
`;

export const Signature = styled.div`
    font:italic 20px var(--font-display);
    color:var(--primary);
    margin-top:28px
`;

export const CenterLink = styled(PrimaryLink)`
    width:max-content;
    margin:46px auto 0;
    display:flex;
    text-decoration: none;
`;


