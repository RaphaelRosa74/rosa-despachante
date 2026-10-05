import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { styled } from "styled-components";
import heroImage from "@/assets/rosa-hero.jpg";

const whatsappUrl = `https://wa.me/5511965683611?text=${encodeURIComponent("Olá encontrei voces, pelo site, gostaria de solicitar o serviços de voces.")}`;
const mapsUrl = "https://www.google.com/maps?q=Rosa+Despachante,+Rua+Manuel+Gaya,+679,+São+Paulo&output=embed";
const googlePlaceUrl = "https://www.google.com/maps/search/?api=1&query=Rosa%20Despachante&query_place_id=ChIJhwlv7Xv2zpQRbabCVOIo7Co";

const services = [
  ["Transferência", "Transferência de propriedade com orientação em todas as etapas."],
  ["Licenciamento", "Regularização do licenciamento anual do seu veículo."],
  ["Emplacamento", "Primeiro emplacamento e substituição de placas Mercosul."],
  ["Documentação", "Segunda via de CRV, CRLV-e e demais documentos veiculares."],
  ["Regularização", "Débitos, bloqueios, multas e restrições administrativas."],
  ["CNH", "Renovação, segunda via e orientação para processos de habilitação."],
];

const reviews = [
  { name: "Hélio Moreno", time: "um mês atrás", text: "Ótimo lugar. Excelente profissional, tira suas dúvidas claramente, super prestativo e entregou o meu serviço na data certa. Recomendo!" },
  { name: "Igor Alves Prieto", time: "2 meses atrás", text: "Despachante de confiança, eu e minha família só vamos nele." },
  { name: "Rui Alves", time: "um ano atrás", text: "Excelente atendimento. Estava com bloqueio no documento do carro e o problema foi resolvido." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rosa Despachante | Documentação Veicular em São Paulo" },
      { name: "description", content: "Transferência, licenciamento, emplacamento, CNH e regularização veicular na Vila Nova Mazzei, São Paulo." },
      { property: "og:title", content: "Rosa Despachante | Documentação Veicular" },
      { property: "og:description", content: "Resolva a documentação do seu veículo com atendimento próximo e especializado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <Page>
      <Header>
        <Brand href="#inicio" aria-label="Rosa Despachante - início">
          <Monogram>R</Monogram><BrandWords><strong>ROSA</strong><span>DESPACHANTE</span></BrandWords>
        </Brand>
        <Nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#avaliacoes">Avaliações</a><a href="#localizacao">Localização</a>
        </Nav>
        <HeaderCta href={whatsappUrl} target="_blank" rel="noreferrer">Fale conosco</HeaderCta>
      </Header>

      <Hero id="inicio" $image={heroImage}>
        <HeroShade />
        <HeroContent>
          <Eyebrow>Documentação veicular sem complicação</Eyebrow>
          <h1>Seu veículo em dia.<br/><em>Sua tranquilidade também.</em></h1>
          <p>Agilidade, segurança e atendimento próximo para resolver toda a burocracia do seu veículo.</p>
          <Actions><PrimaryLink href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar atendimento <span>→</span></PrimaryLink><TextLink href="#servicos">Conheça os serviços</TextLink></Actions>
        </HeroContent>
        <HeroInfo><span>Atendimento em São Paulo</span><strong>Vila Nova Mazzei</strong></HeroInfo>
      </Hero>

      <TrustBar>
        <div><b>Atendimento</b><span>pessoal e dedicado</span></div>
        <div><b>Processos</b><span>seguros e transparentes</span></div>
        <div><b>Suporte</b><span>direto pelo WhatsApp</span></div>
      </TrustBar>

      <About id="sobre" data-reveal>
        <SectionTag>Rosa Despachante</SectionTag>
        <AboutGrid>
          <h2>Burocracia não precisa<br/>parar o seu caminho.</h2>
          <div><p>Cuidamos dos processos de documentação do seu veículo com clareza, responsabilidade e atenção aos detalhes.</p><p>Você recebe orientação do início ao fim para resolver tudo com mais praticidade e segurança.</p><Signature>Desde 1969 cuidando do seu caminho.</Signature></div>
        </AboutGrid>
      </About>

      <Services id="servicos">
        <SectionHead data-reveal><div><SectionTag>O que fazemos</SectionTag><h2>Soluções para o seu veículo</h2></div><p>Conte com quem entende para cuidar dos documentos enquanto você segue em frente.</p></SectionHead>
        <ServiceGrid>
          {services.map(([title, description], index) => <ServiceCard key={title} data-reveal><Number>{String(index + 1).padStart(2, "0")}</Number><h3>{title}</h3><p>{description}</p><span aria-hidden="true">↗</span></ServiceCard>)}
        </ServiceGrid>
        <CenterLink href={whatsappUrl} target="_blank" rel="noreferrer">Consultar outro serviço <span>→</span></CenterLink>
      </Services>

      <Reviews id="avaliacoes">
        <ReviewHeading data-reveal><SectionTag>Avaliações no Google</SectionTag><h2>A confiança de quem<br/>já contou com a gente.</h2><Rating><strong>3,8</strong><span>★★★★★</span><small>80 avaliações no Google</small></Rating></ReviewHeading>
        <ReviewGrid>
          {reviews.map((review) => <ReviewCard key={review.name} data-reveal><Stars>★★★★★</Stars><blockquote>“{review.text}”</blockquote><footer><Avatar>{review.name.charAt(0)}</Avatar><div><strong>{review.name}</strong><span>{review.time} · Google</span></div></footer></ReviewCard>)}
        </ReviewGrid>
        <GoogleLink href={googlePlaceUrl} target="_blank" rel="noreferrer">Ver todas as avaliações no Google →</GoogleLink>
      </Reviews>

      <Location id="localizacao">
        <MapWrap data-reveal><iframe title="Localização da Rosa Despachante" src={mapsUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></MapWrap>
        <LocationInfo data-reveal><SectionTag>Onde estamos</SectionTag><h2>Venha falar<br/>com a gente.</h2><Address><span>Endereço</span><strong>Rua Manuel Gaya, 679<br/>Vila Nova Mazzei — São Paulo, SP</strong></Address><ContactRow><div><span>Telefone / WhatsApp</span><a href="tel:+5511965683611">(11) 96568-3611</a></div><div><span>E-mail</span><a href="mailto:rosadespachante1969@gmail.com">rosadespachante1969@gmail.com</a></div></ContactRow><Directions href={googlePlaceUrl} target="_blank" rel="noreferrer">Como chegar <span>→</span></Directions></LocationInfo>
      </Location>

      <Footer><Brand href="#inicio"><Monogram>R</Monogram><BrandWords><strong>ROSA</strong><span>DESPACHANTE</span></BrandWords></Brand><p>Documentação veicular com atendimento próximo e responsável.</p><small>© 2026 Rosa Despachante. Todos os direitos reservados.</small></Footer>

      <WhatsApp href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3A12.8 12.8 0 0 0 5 22.4L3.3 29l6.8-1.8A12.8 12.8 0 1 0 16 3Zm0 23.3c-2 0-3.8-.5-5.4-1.4l-.4-.2-4 1 1-3.9-.3-.4a10.4 10.4 0 1 1 9.1 4.9Zm5.7-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.9-3.4-1.8-4.7-4-.4-.6.4-.6 1.1-2 .1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.1.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.3-.6-.5Z"/></svg><span>Fale conosco</span></WhatsApp>
    </Page>
  );
}

const Page = styled.main`overflow:hidden;background:var(--background);color:var(--foreground);font-family:var(--font-sans);a{text-decoration:none;color:inherit}[data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}[data-reveal].visible{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){scroll-behavior:auto;[data-reveal]{opacity:1;transform:none;transition:none}}`;
const Header = styled.header`height:86px;padding:0 clamp(24px,6vw,96px);display:flex;align-items:center;justify-content:space-between;background:var(--surface-dark);color:var(--light-text);position:absolute;z-index:10;top:0;left:0;width:100%;border-bottom:1px solid color-mix(in oklab,var(--light-text) 15%,transparent);@media(max-width:800px){height:72px;padding:0 20px}`;
const Brand = styled.a`display:flex;align-items:center;gap:11px;flex-shrink:0`;
const Monogram = styled.span`width:38px;height:38px;border:1px solid var(--gold);display:grid;place-items:center;color:var(--gold);font:700 25px/1 var(--font-display);transform:rotate(-3deg)`;
const BrandWords = styled.span`display:flex;flex-direction:column;line-height:1;strong{font:700 18px/1 var(--font-display);letter-spacing:0}span{font-size:8px;letter-spacing:2px;margin-top:5px;color:var(--light-muted)}`;
const Nav = styled.nav`display:flex;gap:34px;font-size:12px;font-weight:600;text-transform:uppercase;a{transition:color .2s;&:hover{color:var(--gold)}}@media(max-width:900px){display:none}`;
const HeaderCta = styled.a`border:1px solid var(--gold);padding:12px 19px;text-transform:uppercase;font-size:10px;font-weight:700;letter-spacing:1px;color:var(--gold)!important;transition:.25s;&:hover{background:var(--gold);color:var(--surface-dark)!important}`;
const Hero = styled.section<{$image:string}>`min-height:760px;height:92vh;max-height:940px;position:relative;display:flex;align-items:center;background-image:url(${p=>p.$image});background-size:cover;background-position:center;color:var(--light-text);@media(max-width:700px){min-height:700px;height:92svh;background-position:61% center}`;
const HeroShade = styled.div`position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in oklab,var(--surface-dark) 92%,transparent) 0%,color-mix(in oklab,var(--surface-dark) 72%,transparent) 40%,color-mix(in oklab,var(--surface-dark) 12%,transparent) 78%),linear-gradient(0deg,color-mix(in oklab,var(--surface-dark) 75%,transparent),transparent 45%);`;
const HeroContent = styled.div`position:relative;z-index:1;width:min(680px,86%);margin-left:clamp(24px,9vw,150px);padding-top:70px;h1{font:600 clamp(45px,5.6vw,84px)/.98 var(--font-display);letter-spacing:0;margin:24px 0 26px}em{color:var(--gold);font-style:italic}p{max-width:590px;font-size:17px;line-height:1.75;color:var(--light-muted)}@media(max-width:700px){margin-left:24px;width:calc(100% - 48px);h1{font-size:47px}}`;
const Eyebrow = styled.div`font-size:11px;text-transform:uppercase;letter-spacing:3px;color:var(--gold);font-weight:700;display:flex;align-items:center;gap:12px;&:before{content:"";width:35px;height:1px;background:var(--gold)}`;
const Actions = styled.div`display:flex;align-items:center;gap:28px;margin-top:38px;@media(max-width:520px){align-items:flex-start;flex-direction:column;gap:18px}`;
const PrimaryLink = styled.a`display:inline-flex;align-items:center;gap:24px;background:var(--primary);color:var(--primary-foreground)!important;padding:18px 22px;text-transform:uppercase;font-size:11px;font-weight:700;letter-spacing:.8px;transition:.25s;&:hover{background:var(--wine-warm);transform:translateY(-2px)}span{font-size:18px}`;
const TextLink = styled.a`font-size:12px;text-transform:uppercase;font-weight:700;border-bottom:1px solid var(--light-muted);padding-bottom:5px`;
const HeroInfo = styled.div`position:absolute;z-index:1;right:clamp(24px,6vw,96px);bottom:38px;text-align:right;display:flex;flex-direction:column;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--light-muted);strong{font-size:13px;color:var(--light-text);margin-top:5px}@media(max-width:700px){display:none}`;
const TrustBar = styled.section`display:grid;grid-template-columns:repeat(3,1fr);padding:30px clamp(24px,9vw,150px);background:var(--primary);color:var(--primary-foreground);div{display:flex;flex-direction:column;align-items:center;border-right:1px solid color-mix(in oklab,var(--primary-foreground) 25%,transparent);&:last-child{border:0}}b{text-transform:uppercase;font:600 16px var(--font-display)}span{font-size:10px;letter-spacing:1px;margin-top:5px;color:color-mix(in oklab,var(--primary-foreground) 70%,transparent)}@media(max-width:650px){grid-template-columns:1fr;gap:20px;div{border-right:0;border-bottom:1px solid color-mix(in oklab,var(--primary-foreground) 20%,transparent);padding-bottom:18px;&:last-child{padding:0}}}`;
const SectionTag = styled.div`font-size:10px;text-transform:uppercase;letter-spacing:2.5px;color:var(--primary);font-weight:700;margin-bottom:22px`;
const About = styled.section`padding:110px clamp(24px,9vw,150px);max-width:1500px;margin:auto`;
const AboutGrid = styled.div`display:grid;grid-template-columns:1.05fr .8fr;gap:10vw;h2{font:600 clamp(38px,4vw,60px)/1.08 var(--font-display);margin:0;color:var(--wine-deep)}p{font-size:15px;line-height:1.8;margin:0 0 14px;color:var(--muted-foreground)}@media(max-width:750px){grid-template-columns:1fr;gap:38px}`;
const Signature = styled.div`font:italic 20px var(--font-display);color:var(--primary);margin-top:28px`;
const Services = styled.section`background:var(--surface-dark);color:var(--light-text);padding:110px clamp(24px,9vw,150px);${SectionTag}{color:var(--gold)}`;
const SectionHead = styled.div`max-width:1220px;margin:0 auto 55px;display:flex;justify-content:space-between;align-items:end;h2{font:600 clamp(40px,4vw,58px)/1 var(--font-display);margin:0}p{max-width:410px;color:var(--light-muted);line-height:1.7;font-size:14px}@media(max-width:750px){display:block;p{margin-top:24px}}`;
const ServiceGrid = styled.div`max-width:1220px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);border-left:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);@media(max-width:800px){grid-template-columns:1fr}`;
const ServiceCard = styled.article`position:relative;min-height:250px;padding:32px;border-right:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);border-bottom:1px solid color-mix(in oklab,var(--light-text) 18%,transparent);transition:.3s;h3{font:600 27px var(--font-display);margin:35px 0 14px}p{font-size:13px;line-height:1.7;color:var(--light-muted);max-width:300px}span:last-child{position:absolute;right:28px;top:28px;color:var(--gold);font-size:20px}&:hover{background:var(--wine-deep);transform:translateY(-3px)}`;
const Number = styled.span`font-size:10px;color:var(--gold);letter-spacing:2px`;
const CenterLink = styled(PrimaryLink)`width:max-content;margin:46px auto 0;display:flex`;
const Reviews = styled.section`padding:110px clamp(24px,9vw,150px);background:var(--muted)`;
const ReviewHeading = styled.div`max-width:1220px;margin:0 auto 50px;position:relative;h2{font:600 clamp(40px,4vw,60px)/1.08 var(--font-display);color:var(--wine-deep);margin:0}.sc-bdfCDU{}@media(max-width:750px){padding-bottom:120px}`;
const Rating = styled.div`position:absolute;right:0;bottom:0;display:grid;grid-template-columns:auto auto;align-items:center;gap:0 15px;strong{font:600 50px var(--font-display);grid-row:span 2;color:var(--primary)}span{color:var(--gold);letter-spacing:2px}small{font-size:10px;color:var(--muted-foreground)}@media(max-width:750px){left:0;right:auto;bottom:0}`;
const ReviewGrid = styled.div`max-width:1220px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;@media(max-width:800px){grid-template-columns:1fr}`;
const ReviewCard = styled.article`background:var(--card);padding:30px;min-height:290px;display:flex;flex-direction:column;justify-content:space-between;border-top:3px solid var(--primary);box-shadow:0 12px 35px color-mix(in oklab,var(--foreground) 8%,transparent);blockquote{font:italic 18px/1.6 var(--font-display);margin:22px 0;color:var(--foreground)}footer{display:flex;align-items:center;gap:12px}footer div{display:flex;flex-direction:column}footer strong{font-size:11px;text-transform:uppercase}footer span{font-size:9px;color:var(--muted-foreground);margin-top:4px}`;
const Stars = styled.div`color:var(--gold);font-size:13px;letter-spacing:2px`;
const Avatar = styled.div`width:36px;height:36px;border-radius:50%;background:var(--primary);color:var(--primary-foreground);display:grid!important;place-items:center;font:600 17px var(--font-display)`;
const GoogleLink = styled.a`display:block;width:max-content;margin:38px auto 0;font-size:11px;text-transform:uppercase;font-weight:700;color:var(--primary)!important;border-bottom:1px solid var(--primary);padding-bottom:5px`;
const Location = styled.section`display:grid;grid-template-columns:1.15fr .85fr;min-height:600px;background:var(--wine-deep);color:var(--light-text);@media(max-width:850px){grid-template-columns:1fr}`;
const MapWrap = styled.div`min-height:500px;iframe{width:100%;height:100%;border:0;display:block;filter:saturate(.65) contrast(1.05)}@media(max-width:850px){height:430px}`;
const LocationInfo = styled.div`padding:90px clamp(30px,6vw,80px);${SectionTag}{color:var(--gold)}h2{font:600 clamp(42px,4vw,62px)/1.04 var(--font-display);margin:0 0 45px}`;
const Address = styled.div`display:flex;flex-direction:column;border-top:1px solid color-mix(in oklab,var(--light-text) 20%,transparent);padding-top:24px;span{font-size:9px;text-transform:uppercase;letter-spacing:2px;color:var(--gold)}strong{font-size:14px;line-height:1.7;margin-top:10px}`;
const ContactRow = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:25px;border-top:1px solid color-mix(in oklab,var(--light-text) 20%,transparent);margin-top:24px;padding-top:24px;div{display:flex;flex-direction:column;min-width:0}span{font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);margin-bottom:9px}a{font-size:12px;overflow-wrap:anywhere}@media(max-width:520px){grid-template-columns:1fr}`;
const Directions = styled(PrimaryLink)`width:max-content;margin-top:38px;background:var(--gold);color:var(--surface-dark)!important`;
const Footer = styled.footer`background:var(--surface-dark);color:var(--light-text);padding:55px clamp(24px,9vw,150px);display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:30px;p{color:var(--light-muted);font-size:12px;text-align:center}small{font-size:9px;color:var(--light-muted);text-align:right}@media(max-width:750px){grid-template-columns:1fr;text-align:center;justify-items:center;small{text-align:center}}`;
const WhatsApp = styled.a`position:fixed;z-index:20;right:24px;bottom:24px;height:54px;background:oklch(0.7 0.2 145);color:oklch(1 0 0)!important;border-radius:30px;display:flex;align-items:center;gap:10px;padding:0 18px 0 14px;box-shadow:0 8px 25px color-mix(in oklab,var(--foreground) 25%,transparent);font-size:10px;text-transform:uppercase;font-weight:700;transition:.25s;svg{width:27px;height:27px;fill:currentColor}&:hover{transform:translateY(-3px)}@media(max-width:600px){width:56px;height:56px;padding:14px;span{display:none}}`;
