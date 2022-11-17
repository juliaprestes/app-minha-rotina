import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "./getToken";

function useVerifyToken() {
  const decodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodedToken) {
      navigate("/login");
    }
  });
  return getToken(decodedToken);
}
export default useVerifyToken;
