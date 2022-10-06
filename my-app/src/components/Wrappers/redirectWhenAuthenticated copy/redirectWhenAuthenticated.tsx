import React from "react";
import { Outlet } from "react-router-dom";
import auth from "../../../auth/authHandler";

export function RedirectWhenAuthenticated() {
  const authenticated = auth.tokenValidation();

  if (authenticated) {
    window.location = "/home" as unknown as Location;
    return <div />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
