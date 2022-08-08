import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function NavigationRoutes() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/app' element={<OrphanagesMap/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default NavigationRoutes;