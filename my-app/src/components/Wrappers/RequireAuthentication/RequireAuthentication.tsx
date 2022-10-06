import React from "react";
import { Outlet } from "react-router-dom";

export function RequireAuthentication() {
  const authenticated = localStorage.getItem("token");

  if (!authenticated) {
    window.location =
      `/login?goBackTo=${window.location.pathname}` as unknown as Location;
    return <div />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
