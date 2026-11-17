import styled from "styled-components";

export const Reviews = styled.section`
    padding:110px clamp(24px,9vw,150px);
    background:var(--muted)
`;

export const ReviewGrid = styled.div`
    max-width:1220px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:18px;

    @media(max-width:800px){
        grid-template-columns:1fr
    }
`;
export const ReviewCard = styled.article`
    background:var(--card);
    padding:30px;
    min-height:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-top:3px solid var(--primary);
    box-shadow:0 12px 35px color-mix(in oklab,var(--foreground) 8%,transparent);
    blockquote{
        font:italic 18px/1.6 var(--font-display);
        margin:22px 0;
        color:var(--foreground)
    }
    footer{
        display:flex;
        align-items:center;
        gap:12px
    }
    footer div{
        display:flex;
        flex-direction:column
    }
    footer strong{
        font-size:11px;
        text-transform:uppercase
    }
    footer span{
        font-size:9px;
        color:var(--muted-foreground);
        margin-top:4px
    }
`;
export const Stars = styled.div`
    color:var(--gold);
    font-size:13px;
    letter-spacing:2px
`;
export const Avatar = styled.div`
    width:36px;
    height:36px;
    border-radius:50%;
    background:var(--primary);
    color:var(--primary-foreground);
    display:grid!important;
    place-items:center;
    font:600 17px var(--font-display)
`;
export const GoogleLink = styled.a`
    display:block;
    width:max-content;
    margin:40px auto 0;
    font-size:11px;
    text-decoration:none;
    text-transform:uppercase;
    font-weight:700;
    color:var(--primary)!important;
    border-bottom:1px solid var(--primary);
    padding-bottom:5px;
    &:hover{
        color:#5b0015b0!important;
    }
`;

export const ReviewHeading = styled.div`
    font-size: 17px;
    text-align: center;
    max-width:1220px;
    margin:0 auto 50px;
    position:relative;
    h2{
    font:600 clamp(40px,4vw,60px)/1.08 var(--font-display);
    color:var(--wine-deep);
    margin:0
    }
    
    @media(max-width:750px){
    padding-bottom:120px
    }
`;