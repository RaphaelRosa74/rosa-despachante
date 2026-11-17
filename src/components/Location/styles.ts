import styled from 'styled-components';
import { SectionTag } from '../About/styles';
import { PrimaryLink } from '../Hero/styles';

export const Location = styled.section`
    display:grid;
    grid-template-columns:1.15fr .85fr;
    min-height:600px;
    background:var(--wine-deep);
    color:var(--light-text);

    @media(max-width:850px){
        grid-template-columns:1fr
    }
`;

export const MapWrap = styled.div`
    min-height:500px;
    iframe{
        width:100%;
        height:100%;
        border:0;
        display:block;
        filter:saturate(.65) contrast(1.05)
    }

    @media(max-width:850px){
        height:430px
    }
`;

export const LocationInfo = styled.div`
    padding:90px clamp(30px,6vw,80px);

    ${SectionTag}{
        color:var(--gold)
        }
    h2{
        font:600 clamp(42px,4vw,62px)/1.04 var(--font-display);
        margin:0 0 27px
    }
`;

export const Address = styled.div`
    display:flex;
    flex-direction:column;
    border-top:1px solid color-mix(in oklab,var(--light-text) 20%,transparent);
    padding-top:24px;
    span{
        font-size:9px;
        text-transform:uppercase;
        letter-spacing:2px;
        color:var(--gold)
    }
    strong{
        font-size:14px;
        line-height:1.7;
        margin-top:10px
    }
`;

export const ContactRow = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:25px;
    border-top:1px solid color-mix(in oklab,var(--light-text) 20%,transparent);
    margin-top:24px;
    padding-top:24px;
    text-decoration:none;
    div{
        display:flex;
        flex-direction:column;
        min-width:0
    }
    span{
        font-size:9px;
        text-transform:uppercase;
        letter-spacing:1.5px;
        color:var(--gold);
        margin-bottom:9px
    }
    a{
        color:var(--light-text);
        font-size:12px;
        overflow-wrap:anywhere
    }

    @media(max-width:520px){
        grid-template-columns:1fr
    }
`;

export const Directions = styled(PrimaryLink)`
    width:max-content;
    margin-top:38px;
    text-decoration:none;
    background:var(--gold);
    color:var(--surface-dark)!important
`;
