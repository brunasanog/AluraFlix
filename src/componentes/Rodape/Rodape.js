import styles from './Rodape.module.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Rodape() {
    
    return (
         <footer className={styles.rodape}>
            <Link to="./" className={styles.logo}>
                <img src={logo} alt="Logo Projeto Alura Flix"/>
            </Link>
            <h3 className={styles.texto}>Projeto realizado por Bruna SaNog</h3>
        </footer>
    )
}

export default Rodape;