import { useState } from "react";
import * as S from "./styles";

const faqs = [
  {
    q: "O que faz um despachante?",
    a: "Um despachante auxilia na regularização de documentos de veículos. Cuidamos de toda a burocracia para você não perder tempo em filas, com rapidez e segurança."
  },
  {
    q: "Preciso ir até o Detran para resolver meus problemas com o veículo?",
    a: "Não necessariamente. Na maior parte dos casos resolvemos tudo por você, sem que precise se deslocar até o Detran."
  },
  {
    q: "Quais serviços vocês realizam para veículos?",
    a: "Transferência de propriedade, primeiro emplacamento, segunda via de CRV/CRLV, licenciamento anual, regularização de débitos (IPVA e multas), baixa de veículo, entre outros."
  },
  {
    q: "Quanto tempo leva para transferir um veículo?",
    a: "O prazo varia conforme a demanda do Detran, mas geralmente a transferência é concluída em até 5 dias úteis após a entrega de toda a documentação."
  },
  {
    q: "Preciso reconhecer firma para transferência de veículo?",
    a: "Sim, a assinatura do vendedor no CRV precisa ser reconhecida em cartório. Orientamos você em todo o processo."
  },
  {
    q: "Quais documentos são necessários para transferência?",
    a: "CRV assinado com firma reconhecida, RG e CPF do comprador e comprovante de residência. Conferimos tudo para evitar problemas."
  },
  {
    q: "Posso parcelar os débitos do veículo?",
    a: "Sim, existem opções de parcelamento no cartão de crédito para IPVA, multas e licenciamento. Ajudamos a escolher a melhor forma."
  },
  {
    q: "Como faço para solicitar um orçamento?",
    a: "É só chamar no WhatsApp (11) 96568-3611 ou visitar nosso escritório na Rua Manuel Gaya, 679 — Vila Nova Mazzei."
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <S.Section id="faq">
      <S.Container>
        <S.Title>Perguntas Frequentes</S.Title>
            <S.Subtitle>
                Tire suas dúvidas sobre documentação e serviços para seu veículo.
            </S.Subtitle>

          <S.AccordionList>
  {faqs.map((faq, i) => {
    const isOpen = openIndex === i;

    return (
          <S.AccordionItem key={i}>
            <S.AccordionTrigger
              type="button"
              $open={isOpen}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              {faq.q}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </S.AccordionTrigger>

            <S.AccordionContent
              id={`faq-answer-${i}`}
              $open={isOpen}
              aria-hidden={!isOpen}
            >
              <S.AccordionContentInner>
                <S.Answer>{faq.a}</S.Answer>
              </S.AccordionContentInner>
            </S.AccordionContent>
          </S.AccordionItem>
        );
      })}
    </S.AccordionList>
      </S.Container>
    </S.Section>
  );
};

export default FAQ;
