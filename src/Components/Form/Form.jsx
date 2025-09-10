import { useState } from "react"


const Form = () => {

  const [formData,  setFormData] = useState('');


  return (
    <div className='h-full w-full py-4 md:py-9' style={{ backgroundColor: 'var(--primary-transparent)' }}>
      <h2 className="heading2 text-center">
        Stay Updated
      </h2>
      <form
        className="flex justify-center items-center gap-4 md:gap-6 px-4 pt-4 md:px-9 md:pt-9"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          className='h-12 bg-white w-full md:w-120 p-4 rounded focus:outline-[#2DBEE6]'
          type="email" name="" id="" placeholder='Email' required value={formData} title=" Enter email"
          onChange={(e) => setFormData(e.value)} />
        <button
          type="submit"
          className='bg-[#2DBEE6] hover:bg-[#2dbee6c4] cursor-pointer h-12 px-5 rounded font-semibold'
          title="Submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
