import { makeStyles } from "@material-ui/core";

export const useAuthStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
    },

    logo: {
      fontSize: 42,
      margin: theme.spacing(0, 0, 1, 0),
      fontWeight: 700,
    },

    sector: {
      maxWidth: 450,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      padding: theme.spacing(2),
    },

    input: {
      width: "100%",
      marginBottom: theme.spacing(1),
    },

    btnLogin: {
      width: "100%",
      margin: theme.spacing(0, 1),
    },

    btnForgot: {
      width: "100%",
      margin: theme.spacing(0.5, 0),
      fontSize: 16,
    },

    divider: {
      width: "75%",
      margin: theme.spacing(1, 0, 3, 0),
    },

    btnSend: {
      width: "100%",
      margin: theme.spacing(0, 1),
    },

    btnGoback: {
      width: "100%",
      margin: theme.spacing(0.5, 0),
      fontSize: 16,
    },

    btnSignup: {
      width: "100%",
      margin: theme.spacing(0, 1),
      backgroundColor: theme.palette.success.main,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      }
    },

    backDrop: {
      zIndex: 10,
      position: "absolute",
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,0,0)",
      transition: "backdropFilter 1s ease-in"
    },
  };
});
