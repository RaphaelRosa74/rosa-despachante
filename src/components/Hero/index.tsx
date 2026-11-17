import heroImage from "@/assets/rosa-hero.jpg";
import { whatsappUrl } from '@/utils/whatsapp';
import * as S from './styles';


const Hero = () => {

    return (

        <S.Hero id="inicio" $image={heroImage}>

            <S.HeroShade />

                <S.HeroContent>

                <S.Eyebrow>
                    Documentação veicular sem complicação
                </S.Eyebrow>

                <h1>
                    Seu veículo em dia.<br/><em>Sua tranquilidade também.</em>
                </h1>

                <p>
                    Agilidade, segurança e atendimento próximo para resolver toda a burocracia do seu veículo.
                </p>

                <S.Actions>
                    <S.PrimaryLink href={whatsappUrl} target="_blank" rel="noreferrer">
                        Solicitar atendimento <span>→</span>
                    </S.PrimaryLink>
                        <S.TextLink href="#servicos">
                        Conheça os serviços
                    </S.TextLink>
                </S.Actions>

                </S.HeroContent>

                <S.HeroInfo>
                    <span>Atendimento em São Paulo</span>
                    <strong>Vila Nova Mazzei</strong>
                </S.HeroInfo>

        </S.Hero>
    )
}
export default Hero;