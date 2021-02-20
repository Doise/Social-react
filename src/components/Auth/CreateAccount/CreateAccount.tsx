import { TextField, Typography } from "@material-ui/core";
import { SocialButton } from "../../SocialButton/SocialButton";
import { useAuthStyles } from "../AuthStyles";

export interface Props {
  goBack: () => void;
}

export const CreateAccount = ({ goBack }: Props) => {
  const classes = useAuthStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sector}>
        <Typography variant="h3" className={classes.logo}>
          SOCIAL
        </Typography>
        <TextField
          variant="outlined"
          label="Email"
          className={classes.input}
        ></TextField>
        <TextField
          variant="outlined"
          label="Username"
          className={classes.input}
        ></TextField>
        <TextField
          variant="outlined"
          label="Password"
          className={classes.input}
        ></TextField>
        <SocialButton
          variant="contained"
          color="primary"
          className={classes.btnSignup}
        >
          Create New Account
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
