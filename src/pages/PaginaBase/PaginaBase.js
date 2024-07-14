import Cabecalho from '../../componentes/Cabecalho/Cabecalho';
import Rodape from '../../componentes/Rodape/Rodape';
import { Outlet } from 'react-router-dom';

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaBase;