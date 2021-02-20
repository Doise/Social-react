import { Dialog, Slide } from "@material-ui/core";
import { createElement, ReactElement, useState } from "react";
import { CreateAccount } from "./CreateAccount/CreateAccount";
import { useAuthDialogStyles } from "./AuthDialogStyles";
import { useAuth } from "./AuthProvider/AuthProvider";
import { ForgotPass } from "./ForgotPass/ForgotPass";
import { Login } from "./Login/Login";

export const AuthDialog = () => {
  const { isAuthOpen, setIsAuthOpen } = useAuth();
  const classes = useAuthDialogStyles();
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isSlide, setIsSlide] = useState(true);

  const goBack = () => {
    setIsSlide(false);
    setDirection("left");
    setNextComp(<Login forgotPass={forgotPass} createAccount={createAccount} />);
  };

  const createAccount = () => {
    setIsSlide(false);
    setDirection("right");
    setNextComp(<CreateAccount goBack={goBack} />);
  }

  const forgotPass = () => {
    setIsSlide(false);
    setDirection("right");
    setNextComp(<ForgotPass goBack={goBack} />);
  };

  const handleExited = () => {
    setCurrentComp(nextComp);

    if(nextComp?.type === createElement(Login).type) {
      setDirection("right");
    } else {
      setDirection("left");
    }

    setIsSlide(true);
  };

  const [nextComp, setNextComp] = useState<ReactElement | null>(null);
  const [currentComp, setCurrentComp] = useState<ReactElement | null>(
    <Login forgotPass={forgotPass} createAccount={createAccount} />
  );

  return (
    <Dialog
      open={isAuthOpen}
      onClose={() => setIsAuthOpen(false)}
      className={classes.root}
      PaperProps={{
        classes: {
          root: classes.paper,
        },
      }}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <Slide
        direction={direction}
        in={isSlide}
        mountOnEnter
        onExited={handleExited}
      >
        <div>{currentComp}</div>
      </Slide>
    </Dialog>
  );
};
