import Inicio from './pages/Inicio/inicio';
import PaginaBase from './pages/PaginaBase/PaginaBase.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;