import { Logo } from '@/assets/svg/logo'
import { whatsappUrl } from '@/utils/whatsapp'
import * as S from './styles'

const About = () => {
    return (
        <S.About id="sobre" data-reveal>
            <S.AboutGrid>
                <div>
                    <S.SectionTag>Sobre nós</S.SectionTag>
                    <p>
                        A Rosa Despachante atua há mais de 40 anos oferecendo confiança, agilidade e experiência em serviços relacionados a veículos. Somos uma empresa familiar com tradição de mais de 40 anos no mercado, devidamente credenciada ao DETRAN-SP e ao Conselho Regional dos Despachantes Documentalistas.
                    </p>
                    <p>
                        Você recebe orientação do início ao fim para resolver tudo com mais praticidade e segurança.
                    </p>
                    <S.Signature>
                        A burocracia não precisa<br/>parar o seu caminho.
                    </S.Signature>
                    <S.CenterLink href={whatsappUrl} target="_blank" rel="noreferrer">
                        Consultar débitos <span>→</span>
                    </S.CenterLink>
                </div>
                <Logo />
            </S.AboutGrid>
        </S.About>
    )
}

export default About