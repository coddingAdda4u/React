import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate as navigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(state => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    }
    if (!authStatus && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, authentication]);
  return loader ? <p>Loading...</p> : { children };
}

export default Protected;