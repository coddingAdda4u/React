import {Link, Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <div className='flex justify-center items-center gap-10 flex-col p-12'>
      <h1 className='text-4xl font-semibold'>Hello this is products page</h1>
      <div className='flex gap-4'>
        <Link to="/products/cars">Cars</Link>
        <Link to="/products/bikes">Bikes</Link>
      </div>
      <Outlet />
    </div>
  )
}