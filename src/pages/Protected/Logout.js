import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Remove the 'token' cookie

        navigate("/login"); // Redirect to the login page after successful logout
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logout();
  }, [navigate]); // Empty dependency array ensures the effect runs only once

  return null;
};

export default Logout;
