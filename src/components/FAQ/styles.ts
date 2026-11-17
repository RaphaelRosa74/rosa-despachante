import styled from "styled-components";

export const Section = styled.section`
    padding: 6rem 0;
    background: var(--color-border);
`;

export const Container = styled.div`
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const Title = styled.h2`
    font-size: 11px!important;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 22px;

    @media (min-width: 768px) {
        font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
    color: var(--muted-foreground);
    margin-bottom: 2.5rem;
`;

export const AccordionList = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const AccordionItem = styled.div`
    background: var(--muted);
    border-radius: 0.75rem;
    border: 1px solid color-mix(in oklab,var(--light-text) 18%,transparent);
    padding: 0 1.5rem;
    overflow: hidden;
`;

export const AccordionTrigger = styled.button<{ $open: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-weight: 500;
    font-size: 1rem;
    color: #var(--foreground);
    font-family: var(--font-body);

    svg {
        flex-shrink: 0;
        transition: transform 0.2s;
        transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
        color: #var(--foreground);
     }
`;

export const AccordionContent = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

  transition:
    grid-template-rows 0.3s ease,
    opacity 0.3s ease,
    visibility 0s ${({ $open }) => ($open ? "0s" : "0.3s")};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const AccordionContentInner = styled.div`
  min-height: 0;
  overflow: hidden;
`;

export const Answer = styled.p`
  margin: 0;
  padding-bottom: 1.25rem;
  color: var(--foreground);
  line-height: 1.7;
  font-size: 0.9375rem;
`;