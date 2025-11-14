import { useState, useCallback, useEffect, useRef} from 'react';

const App = () => {

  const [length, setLength] = useState(16)
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [splcharAllowed, setSplCharAllowed] = useState(true);
  const [passwordValue, setPasswordValue] = useState('');

  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) chars += "0123456789";
    if (splcharAllowed) chars += "@#${%*}!?+-_[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * chars.length + 1)
      pass += chars.charAt(char)
    }
    setPasswordValue(pass)
  }, [length, numberAllowed, splcharAllowed, setPasswordValue])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 32)
    window.navigator.clipboard.writeText(passwordValue)
  }, [passwordValue])

  useEffect(passwordGenerator, [length, numberAllowed, splcharAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-12 p-6 bg-gray-900'>
        <h1 className='mb-6 text-3xl mx-auto text-center'>Password generator</h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={passwordValue}
            placeholder='Password'
            className='h-10 w-full p-4 bg-gray-300 rounded-tl-md rounded-bl-md outline-none placeholder:text-black text-xl text-black'
            readOnly
            ref={passwordRef}
          />
          <button
            className='h-10 w-auto px-4 bg-gray-800 hover:bg-gray-700 text-amber-50 text-xl font-semibold rounded-tr-md rounded-br-md cursor-pointer'
            onClick={copyPassword}
          >copy</button>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <div>
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className='accent-blue-700 cursor-grab'
              onChange={e => setLength(e.target.value)}
            />
            <label
              htmlFor="#"
              className='ml-1'
            >{length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id='numbers'
              checked={numberAllowed}
              className='accent-blue-700 cursor-pointer'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label
              htmlFor="numbers"
              className='ml-1 cursor-pointer'
            >Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              id='chars'
              checked={splcharAllowed}
              className='accent-blue-700 cursor-pointer'
              onChange={() => setSplCharAllowed((prev) => !prev)}
            />
            <label
              htmlFor="chars"
              className='ml-1 cursor-pointer'
            >Special Chars</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;