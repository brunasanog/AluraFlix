import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './Cabecalho.module.css';
import { Botao } from '../Botao/Botao'

function Cabecalho() {
    return (
            <header className={styles.cabecalho}>
                <>
                    <Link to="./">
                        <img className={styles.logo} src={logo} alt="LogoAluraFlix" />
                    </Link>

                    <nav className={styles.menu}>
                        <Botao condition="true" url="./" >
                            Início
                        </Botao>
                        <Botao condition="true" url="./addvideo" >
                            Novo Vídeo
                        </Botao>
                    </nav>
                </>
            </header>
        )
}

export default Cabecalho;