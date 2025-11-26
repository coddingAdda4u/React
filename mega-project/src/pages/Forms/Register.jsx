import { useForm } from "react-hook-form";
import { useDispatch as dispatch } from "react-redux";
import { Link, useNavigate as navigate } from "react-router-dom";
import { useState } from 'react';
import authentication from '../../appwrite/auth';
import { login as authLogin } from '../../store/authSlice';

function Register() {
  const [error, setError] = useState(null);

  const { register, handleSubmit, setValue, formState: {errors}} = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const onSubmit = async (data) => {
    setError("");
    console.log(data);
    try {
      const session = await authentication.createAccount(data);
      if (session) {
        const userData = await authentication.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate('/');
          setValue('name', "");
          setValue('email', "");
          setValue('password', "");
        }
      }
    } catch (err) {
      setError(err);
      console.log("Error on register user ", error);
    }
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm relative"
      >
        <Link
          className="absolute top-8 left-6 h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center"
          to={'/'}
        >
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">Register</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            autoComplete="off"
            {...register("name", { required: true })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            autoComplete="off"
            {...register("email", { required: true, maxLength: 40, minLength: 8 })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            autoComplete="off"
            {...register("password", { required: true, maxLength: 40, minLength: 8 })}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            placeholder="Enter your password"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
        />
        <p className="text-center mt-6">Already have account <Link to={'/login'} className="text-blue-600 underline">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;