import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

export default function Body() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}