import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authentication from './appwrite/auth'
import { login, logOut } from "./store/authSlice";
import MyRoutes from './routes/MyRoutes';

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authentication.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return null;
  }
  return (
    <MyRoutes />
  );
}

export default App;