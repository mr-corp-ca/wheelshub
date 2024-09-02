import { useUserContext } from "../Context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { user } = useUserContext();
  console.log('************I am here brooo', user )
  if (!user.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (user?.role === allowedRoles) {
    return <Outlet />;
  }

  if (user?.role === "FINANCE") {
    return <Navigate to="/finance/finance" replace />;
  } else if (user?.role === "INSURANCE") {
    return <Navigate to="/insurance/insurance" replace />;
  } else if (user?.role === "MECHANIC") {
    return <Navigate to="/mechanic/mechanic-dashboard" replace />;
  } else if (user?.role === "REPRESENTATIVE") {
    return <Navigate to="/representative/representative-dashboard" replace />;
  } else if (user?.role === "DEALER") {
    return <Navigate to="/dealer/dealer-dashboard" replace />;
  } else {
    <Navigate to="/customer/customer-dashboard" replace />;
  }
};

export default RequireAuth;
