import { Link, useLocation } from 'react-router-dom';
import styles from './Botao.module.css';

function Botao({ url, children }) {
    const paginaEmExibicao = useLocation();

    let classeDoBotao = '';

    if (paginaEmExibicao.pathname === '/') {
        if (url === './') {
            classeDoBotao = styles.botaoSelecionado;
        } else {
            classeDoBotao = styles.botao;
        }
    } else if (paginaEmExibicao.pathname === '/addvideo') {
        if (url === './addvideo') {
            classeDoBotao = styles.botaoSelecionado;
        } else {
            classeDoBotao = styles.botao;
        }
    } else {
        classeDoBotao = styles.botao;
    }

    return (
        <Link to={url} className={classeDoBotao}>
            {children}
        </Link>
    );
}

function BotaoFormulario({ type, children }) {
    const classeDoBotao = type === 'submit' ? styles.botaoSelecionado : styles.botao;
    return (
        <button className={classeDoBotao} type={type}>
            {children}
        </button>
    );
}

export { Botao, BotaoFormulario };
