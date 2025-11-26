import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Body from './Body';
import { TextEditor, Fallback, Home, Login, Register } from "../pages";

function MyRoutes() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Body />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="/add-post" element={<TextEditor />} />

        <Route path="*" element={<Fallback />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default MyRoutes;
