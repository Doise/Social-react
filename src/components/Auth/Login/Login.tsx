import { Divider, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLoginUser } from "../../../api/loginUser";
import { SocialButton } from "../../SocialButton/SocialButton";
import { useAuthStyles } from "../AuthStyles";

export interface Props {
  forgotPass: () => void;
  createAccount: () => void;
}

export const Login = ({ forgotPass, createAccount }: Props) => {
  const classes = useAuthStyles();
  const { loginUser, loading, error } = useLoginUser();

  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser(identity, password).then(user => {
      console.log(user);
    })
  };

  useEffect(() => {
    console.log(`isLoading: ${loading}`);
  }, [loading])
  
  useEffect(() => {
    console.log(`error: ${error}`);
  }, [error])

  return (
    <div className={classes.root}>
      <div className={classes.sector}>
        <Typography variant="h3" className={classes.logo}>
          SOCIAL
        </Typography>
        <TextField
          variant="outlined"
          label="Email / Username"
          className={classes.input}
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Password"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <SocialButton
          variant="contained"
          color="primary"
          className={classes.btnLogin}
          onClick={handleLogin}
        >
          Log In
        </SocialButton>
        <SocialButton
          variant="text"
          color="primary"
          className={classes.btnForgot}
          onClick={forgotPass}
        >
          Forgot Password?
        </SocialButton>
        <Divider className={classes.divider} />
        <SocialButton
          variant="contained"
          color="primary"
          className={classes.btnSignup}
          onClick={createAccount}
        >
          Create New Account
        </SocialButton>
      </div>
    </div>
  );
};
