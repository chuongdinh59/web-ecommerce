import { useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const { login } = useSelector((state) => state.user);

  return login ? children : <Navigate to="/login" />;
}

export const PrivateRouterOutlet = () => {
  const { login } = useSelector((state) => state.user);
  return login ? <Outlet /> : <Navigate to="/login" />;
};
