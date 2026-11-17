import { googlePlaceUrl, mapsUrl } from '@/utils/google'
import { SectionTag } from '../About/styles'
import * as S from './styles'

const Location = () => {
  return (
          <S.Location id="localizacao">
                <S.MapWrap data-reveal>
                    <iframe title="Localização da Rosa Despachante" 
                    src={mapsUrl} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    />
                </S.MapWrap>
                <S.LocationInfo data-reveal>
                    <SectionTag>Onde estamos</SectionTag>
                    <h2>Venha falar com a gente.</h2>
                    <S.Address>
                        <span>Endereço</span><strong>Rua Manuel Gaya, 679<br/>Vila Nova Mazzei — São Paulo, SP</strong>
                    </S.Address>
                    <S.ContactRow>
                        <div>
                            <span>Telefone / WhatsApp</span>
                            <a href="tel:+5511965683611">(11) 96568-3611</a>
                        </div>
                        <div>
                            <span>E-mail</span>
                            <a href="mailto:rosadespachante1969@gmail.com">rosadespachante1969@gmail.com
                            </a>
                        </div>
                    </S.ContactRow>
                    <S.Directions href={googlePlaceUrl} target="_blank"rel="noreferrer">
                        Como chegar <span>→</span>
                    </S.Directions>
                </S.LocationInfo>
            </S.Location>
    )
}

export default Location