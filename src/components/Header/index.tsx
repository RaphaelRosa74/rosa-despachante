import { Logo } from '@/assets/svg/logo';
import { whatsappUrl } from '@/utils/whatsapp';
import { useEffect, useState } from 'react';
import * as S from './styles';

const Header = () => {
    const [direction, setDirection] = useState('up');
    
    useEffect(() => {
        let oldScrollY = 0;
      
        const controlDirection = () => {
            if (window.scrollY > oldScrollY) {
                setDirection('down');
            } else {
                setDirection('up');
            }
            oldScrollY = window.scrollY;
        }

        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    }, []);

    return(
      <S.Header $scrolled={direction === 'up'}>
        <S.Brand href="#inicio" aria-label="Rosa Despachante - início">
          <S.Monogram>
            <Logo color="var(--gold)" />
          </S.Monogram>
          <S.BrandWords>
          <strong>ROSA</strong><span>DESPACHANTE</span>
          </S.BrandWords>
        </S.Brand>
        <S.Nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#faq">FAQ</a>
          <a href="#localizacao">Localização</a>
        </S.Nav>
        <S.HeaderCta href={whatsappUrl} target="_blank" rel="noreferrer">
        Fale conosco
        </S.HeaderCta>
      </S.Header>
    );
};

export default Header;