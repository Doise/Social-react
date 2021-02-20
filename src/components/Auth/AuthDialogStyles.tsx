import { makeStyles } from "@material-ui/core";

export const useAuthDialogStyles = makeStyles((theme) => {
  return {
    root: {
      overflow: "hidden",
    },
    paper: {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
    },
    backDrop: {
      backdropFilter: "blur(2px)",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };
});
