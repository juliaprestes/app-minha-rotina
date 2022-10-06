import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

//Customizando o tema padrão
export const temaEcad = createTheme({
  typography: {
    fontFamily: [`GTWalsheimProRegular`],
    htmlFontSize: 10,
  },
  overrides: {
    MuiContainer: {
      fixed: {
        [breakpoints.down("sm")]: {
          paddingRight: "0px",
          paddingLeft: "0px",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#747679",
      main: "#46484c",
      dark: "#181A1F",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#3e9fff",
      main: "#FFF",
      dark: "#005EFF",
      contrastText: "#FFF",
    },
    success: {
      main: "#009b06",
    },
    info: {
      light: "#3e9fff",
      main: "#007fff",
      dark: "#005EFF",
      contrastText: "#FFF",
    },
    warning: {
      light: "#cbbd9a",
      main: "#b9a779",
      dark: "#A89157",
      contrastText: "#FFF",
    },
    error: {
      light: "#FD948C",
      main: "#FD7166",
      dark: "#FC4D40",
      contrastText: "#FFF",
    },
    grey: {
      300: "#F2F2F2",
    },
  },
});

//Fontes responsivas
//Tag H1 (32px)
temaEcad.typography.h1 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
//Tag H2 (24px)
temaEcad.typography.h2 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "1.4rem",
  color: "#000",
  "@media (min-width:600px)": {
    fontSize: "1.4rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
// px
temaEcad.typography.h3 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "0.9rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },
};
//Tag H5
temaEcad.typography.h5 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "1.25rem",
  "@media (min-width:600px)": {
    fontSize: "1.25rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
};
//Tag H6 (24px)
temaEcad.typography.h6 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
//Subtitulo 1 (16px)
//Itens data DatePicker
temaEcad.typography.subtitle1 = {
  fontFamily: "GTWalsheimProBold",
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
//Subtitulo 2 (14px) **Usado no menu principal
temaEcad.typography.subtitle2 = {
  fontFamily: "GTWalsheimProBold",
  color: "#a89157 !important",
  fontSize: "0.875rem",
  "@media (min-width:600px)": {
    fontSize: "0.875rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "0.875rem",
  },
};
//Tag p (16px)
temaEcad.typography.body1 = {
  fontFamily: "Georgia",
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};
//Tag p (14px)
temaEcad.typography.body2 = {
  fontFamily: "Georgia",
  fontSize: "0.875rem",
  "@media (min-width:600px)": {
    fontSize: "0.875rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "0.875rem",
  },
};
//Tag button span (14px)
temaEcad.typography.button = {
  fontFamily: "GTWalsheimProMedium",
  color: "#005eff !important",
  textDecoration: "underline",
  fontSize: "0.875rem",
  "@media (min-width:600px)": {
    fontSize: "0.875rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "0.875rem",
  },
};
//Tag p (14px)
temaEcad.typography.caption = {
  fontFamily: "GTWalsheimProRegular",
  fontSize: "0.875rem",
  color: "primary",
  "@media (min-width:600px)": {
    fontSize: "0.875rem",
  },
  [temaEcad.breakpoints.up("md")]: {
    fontSize: "0.875rem",
  },
};
