import { Link } from "react-router-dom";

function Fallback() {
  return (
    <div
      className="fixed top-0 left-0 z-99 flex flex-col justify-center items-center h-screen w-full bg-gray-100"
    >
      <h1
        className="text-5xl"
      >
        404 | Page not found</h1>
      <Link
        to={'/'}
        className="text-lg my-6 px-4 py-2 rounded-full bg-blue-600 text-white font-bold tracking-wider">
        <i className="fa-solid fa-angle-left"></i>
        Go back
      </Link>
    </div>
  )
}

export default Fallback;