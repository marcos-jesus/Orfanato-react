import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom'

import Landing from './pages/Landing';

function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Route path='/' element={<Landing/>} />
    </BrowserRouter>
  )
}

export default NavigationRoutes;