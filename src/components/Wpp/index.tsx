import { whatsappUrl } from '@/utils/whatsapp';
import * as S from './styles';

const Wpp = () => {
    return(
        <S.WhatsApp 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Conversar no WhatsApp">
            <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3A12.8 12.8 0 0 0 5 22.4L3.3 29l6.8-1.8A12.8 12.8 0 1 0 16 3Zm0 23.3c-2 0-3.8-.5-5.4-1.4l-.4-.2-4 1 1-3.9-.3-.4a10.4 10.4 0 1 1 9.1 4.9Zm5.7-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.9-3.4-1.8-4.7-4-.4-.6.4-.6 1.1-2 .1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.1.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.3-.6-.5Z"/>
            </svg>
        </S.WhatsApp>
    );
};

export default Wpp;