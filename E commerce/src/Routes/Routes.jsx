import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Body from "./Body"
import {Home, About, Carts, Profile} from '../Pages'

function Router() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Body />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default Router