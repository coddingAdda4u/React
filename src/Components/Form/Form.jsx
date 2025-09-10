import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {

  const [formData, setFormData] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const form = useRef();

  const showEmailStatus = () => {
    setTimeout(() => {
      setShowNotification(false)
    }, 4000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u4jbv2r', 'template_tvuh1du', form.current, {
        publicKey: 'pOW3LodzMiGL0MNiH',
      })
      .then(
        () => {
          setShowNotification(true)
          setEmailStatus(true)
          showEmailStatus()
          setFormData('')
        },
        () => {
          setShowNotification(true)
          setEmailStatus(false)
        },
    );

  };

  return (
    <div className='h-full w-full py-4 md:py-9' style={{ backgroundColor: 'var(--primary-transparent)' }}>
      <h2 className="heading2 text-center">
        Stay Updated
      </h2>
      <form
        className="flex justify-center items-center gap-4 md:gap-6 px-4 pt-4 md:px-9 md:pt-9"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className='h-12 bg-white w-full md:w-120 p-4 rounded focus:outline-[#2DBEE6]'
          type="email" name="email" placeholder='Email' required value={formData} title=" Enter email"
          onChange={(e) => setFormData(e.value)}
        />
        <button
          type="submit"
          className='bg-[#2DBEE6] hover:bg-[#2dbee6c4] cursor-pointer h-12 px-5 rounded font-semibold'
          title="Submit"
        >
          Submit
        </button>
      </form>
      {
        (showNotification) ? 
          (emailStatus) ?
            <div className='flex items-center gap-1 py-3 px-5 shadow-xl rounded-xl outline fixed right-4 bottom-4 bg-[#ffffff]'>
              <img src="Check.png" alt="Check" className='h-6 w-6 bg-white' />
              <h3 className="heading3 text-center text-green-700 mr-2" id='success_mseesage'>
                Email sent successfully
              </h3>
              <button className='cursor-pointer' onClick={() => setShowNotification(false)}>
                <img src="close.png" alt="Close" className='opacity-[0.5]' />
              </button>
            </div>
            :
            <div className='flex items-center gap-1 py-3 px-5 shadow-xl rounded-xl outline fixed right-4 bottom-4 bg-[#ffffff]'>
              <img src="Reject.png" alt="Check" className='h-6 w-6 bg-white' />
              <h3 className="heading3 text-center text-red-700 mr-2" id='success_mseesage'>
                Something went wrong
              </h3>
              <button className='cursor-pointer' onClick={() => setShowNotification(false)}>
                <img src="close.png" alt="Close" className='opacity-[0.5]' />
              </button>
            </div> :
          null
      }
    </div>
  )
}

export default Form
