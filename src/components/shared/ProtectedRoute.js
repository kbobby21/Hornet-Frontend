import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const ProtectedRoute = ({ children, accessBy }) => {
  const isAuthenticated = () => {
    const token = getCookie("token");
    return !!token; // Return true if the token exists, false otherwise
  };

  useEffect(() => {
    const extendExpirationTime = () => {
      const token = getCookie("token");

      if (token) {
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds

        if (!isNaN(expirationTime)) {
          const newExpirationTime = expirationTime + 600000; // Increase expiration time by 10 minutes
          setCookie("token", token, newExpirationTime); // Update the token cookie with the new expiration time
        } else {
          console.log("Invalid expiration time");
        }
      }
    };
    extendExpirationTime();
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return undefined;
  };

  const setCookie = (name, value, expirationTime) => {
    const expires = new Date(expirationTime).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  // useEffect(() => {
  //   extendExpirationTime();
  // }, []); // Run the extension logic only once when the component mounts

  const isNonAuthenticatedAccess = accessBy === "non-authenticated";
  const isAuthenticatedAccess = accessBy === "authenticated";

  if (isNonAuthenticatedAccess && !isAuthenticated()) {
    return children;
  }

  if (isAuthenticatedAccess && isAuthenticated()) {
    return children;
  }

  return <Navigate to="/login" />; // Redirect to the desired route if the user is not authenticated or the token has expired
};

export default ProtectedRoute;
