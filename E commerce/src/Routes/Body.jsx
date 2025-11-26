import { Outlet } from "react-router-dom"
import { Header, Footer } from '../Layout'

function Body() {
  return (
    <div className="container">
      <div className="container-fluid">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
export default Body