import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";

export const Dashboard = () => {
  const { user, setIsAuthOpen, logOut } = useAuth();

  useEffect(() => {
    console.log(user ? "user not null" : "user is null");
  }, [user])
  return (
    <div>
      {user ? user.username : ""}
      <Button variant="contained" color="primary" onClick={() => user ? logOut() : setIsAuthOpen(true)}>
        {user ? "Log Out" : "Log In"}
      </Button>
    </div>
  );
};
