import { googlePlaceUrl } from "@/utils/google";
import { SectionTag } from "../About/styles";
import * as S from "./styles";

const Reviews = () => {
    
    const reviews = [
        { name: "Hélio Moreno", time: "um mês atrás", text: "Ótimo lugar. Excelente profissional, tira suas dúvidas claramente, super prestativo e entregou o meu serviço na data certa. Recomendo!" },
        { name: "Igor Alves Prieto", time: "2 meses atrás", text: "Despachante de confiança, eu e minha família só vamos nele." },
        { name: "Rui Alves", time: "um ano atrás", text: "Excelente atendimento. Estava com bloqueio no documento do carro e o problema foi resolvido." },
];
    return (
        <S.Reviews id="avaliacoes">
            <S.ReviewHeading data-reveal>
                <SectionTag>Avaliações no Google</SectionTag>
                <h2>A confiança de quem já contou com a gente.</h2>
                    </S.ReviewHeading>
            <S.ReviewGrid>
            {reviews.map((review) => <S.ReviewCard key={review.name} data-reveal>
                <S.Stars>★★★★★</S.Stars>
                <blockquote>“{review.text}”</blockquote>
                <footer>
                    <S.Avatar>{review.name.charAt(0)}</S.Avatar>
                    <div>
                        <strong>{review.name}</strong>
                        <span>{review.time} · Google</span>
                    </div>
                </footer>
                </S.ReviewCard>
            )}
            </S.ReviewGrid>
            <S.GoogleLink href={googlePlaceUrl} target="_blank" rel="noreferrer">
                Ver todas as avaliações no Google →
            </S.GoogleLink>
        </S.Reviews>
    );
}
export default Reviews;