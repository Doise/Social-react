import { TextField, Typography } from "@material-ui/core";
import { SocialButton } from "../../SocialButton/SocialButton";
import { useAuthStyles } from "../AuthStyles";

export interface Props {
  goBack: () => void;
}

export const ForgotPass = ({ goBack }: Props) => {
  const classes = useAuthStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sector}>
        <Typography variant="h3" className={classes.logo}>
          SOCIAL
        </Typography>
        <TextField
          variant="outlined"
          label="Email Address"
          className={classes.input}
        ></TextField>
        <SocialButton
          variant="contained"
          color="primary"
          className={classes.btnSend}
        >
          Reset Password
        </SocialButton>
        <SocialButton
          variant="text"
          color="primary"
          className={classes.btnGoback}
          onClick={goBack}
        >
          Go Back
        </SocialButton>
      </div>
    </div>
  );
};
