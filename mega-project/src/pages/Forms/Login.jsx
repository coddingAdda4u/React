import { useForm } from "react-hook-form";
import { Link, useNavigate as navigate } from "react-router-dom";
import { useState } from 'react';
import { login as authLogin } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import authentication from '../../appwrite/auth';
import { Button } from '../../components';

function Login() {

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const onSubmit = async (data) => {
    setError("");
    try {
      const session = await authentication.login(data);
      if (session) {
        const userData = await authentication.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
        setValue('email', '');
        setValue('password', '');
      }
    } catch (err) {
      setError(err);
      console.log("Error at login ", error)
    }
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full bg-gray-200 overflow-hidden">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm relative"
      >
        <Link
          className="absolute top-8 left-6 h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center"
          to={'/'}>
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            autoComplete="off"
            {...register("email", { required: true })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            autoComplete="off"
            {...register("password", { required: true, maxLength: 40, minLength: 8 })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Enter your password"
          />
        </div>
        <input
          className="w-full px-3 py-2 border rounded bg-blue-600 border-none outline-none text-white text-lg tracking-wide "
          type="submit"
          value="Login"
        />
        <p className="text-center mt-6">Dont have account <Link to={'/register'} className="text-blue-600 underline">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;