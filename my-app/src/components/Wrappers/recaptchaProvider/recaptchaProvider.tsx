import React from "react";
import { Outlet } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function RecaptchaProvider() {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LchsaUUAAAAAOzWn7aAQO81nitIt8pyDtsD2m--"
        language="pt-BR"
        scriptProps={{
          async: false, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: "head", // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
        }}
      >
        <Outlet />
      </GoogleReCaptchaProvider>
    </>
  );
}
