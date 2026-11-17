import { SectionTag } from "../About/styles";
import * as S from "./styles";

const Services = () => {
    const services = [
  ["Transferência", "Transferência de propriedade com orientação em todas as etapas."],
  ["Licenciamento", "Regularização do licenciamento anual do seu veículo."],
  ["Emplacamento", "Primeiro emplacamento e substituição de placas Mercosul."],
  ["Documentação", "Segunda via de CRV, CRLV-e e demais documentos veiculares."],
  ["Regularização", "Débitos, bloqueios, multas e restrições administrativas."],
  ["CNH", "Renovação, segunda via e orientação para processos de habilitação."],
];

    return (
        <S.Services id="servicos">
            <S.SectionHead data-reveal>
                <div>
                    <SectionTag>O que fazemos</SectionTag>
                    <h2>Soluções para o seu veículo</h2>
                </div>
                <p>
                    Conte com quem entende para cuidar dos documentos enquanto você segue em frente.
                </p>
            </S.SectionHead>
            <S.ServiceGrid>
                {services.map(([title, description]) => (
                    <S.ServiceCard key={title} data-reveal>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </S.ServiceCard>
                ))}
            </S.ServiceGrid>
      </S.Services>
    );
}
    export default Services;