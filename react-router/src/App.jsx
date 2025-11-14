import { Home, About, Contact, Products, Body, CarsProducts, BikesProducts, NotFound } from './Componenets'
import Info from './Componenets/Others/Info.jsx'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Body />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products' element={<Products />}>
          <Route path='cars' element={<CarsProducts />} />
          <Route path='bikes' element={<BikesProducts />} />
        </Route>
        {/* Route with params */}
        <Route path='customer/:firstname' element={<Info />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}
export default App;