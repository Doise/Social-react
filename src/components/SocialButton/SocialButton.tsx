import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: theme.spacing(1),
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
      textTransform: "none",
      fontSize: 20,
      padding: theme.spacing(1, 2),
    },
  };
});

export const SocialButton = (props: any) => {
  const { children, className, ...other } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${className}`} {...other}>
      {children}
    </Button>
  );
};
