import { PrimaryLink } from "@/components/Hero/styles";
import styled from "styled-components";
import { SectionTag } from "../About/styles";

export const Services = styled.section`
    background:var(--surface-dark);
    color:var(--light-text);
    padding:110px clamp(24px,9vw,150px);
    ${SectionTag}{color:var(--gold)}
`;

export const SectionHead = styled.div`
    max-width:1220px;
    margin:0 auto 55px;
    display:flex;
    justify-content:space-between;
    align-items:end;
    h2{
        font:600 clamp(40px,4vw,58px)/1 var(--font-display);
        margin:0
    }
    p{
        max-width:410px;
        color:var(--light-muted);
        line-height:1.7;
        font-size:14px
    }

    @media(max-width:750px){
    display:block;
        p{
    margin-top:24px
        }
    }
`;

export const ServiceGrid = styled.div`
    max-width:1220px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border-top:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);
    border-left:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);

    @media(max-width:800px){
        grid-template-columns:1fr
    }
`;

export const ServiceCard = styled.article`
    position:relative;
    min-height:200px;
    padding:32px;
    border-right:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);
    border-bottom:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);
    transition:.3s;
    h3{
        font:600 27px var(--font-display);
        margin:35px 0 14px
    }
    p{
        font-size:13px;
        line-height:1.7;
        color:var(--light-muted);
        max-width:300px
    }
    span:last-child{
        position:absolute;
        right:28px;
        top:28px;
        color:var(--gold);font-size:20px
    }
`;

export const Number = styled.span`
    font-size:10px;
    color:var(--gold);
    letter-spacing:2px
`;

export const CenterLink = styled(PrimaryLink)`
    width:max-content;
    margin:46px auto 0;
    display:flex;
    text-decoration: none;
`;
