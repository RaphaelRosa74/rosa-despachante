import * as S from './styles';

const Footer = () => {
    return(
        <S.Footer>
            <S.Brand href="#inicio">
                <S.Monogram>R</S.Monogram>
                <S.BrandWords>
                    <strong>ROSA</strong>
                    <span>DESPACHANTE</span>
                </S.BrandWords>
            </S.Brand>
            <p>
                Documentação veicular com atendimento próximo e responsável.
            </p>
            <small>
                © 2026 Rosa Despachante. Todos os direitos reservados.
            </small>
        </S.Footer>
    );
}

export default Footer;