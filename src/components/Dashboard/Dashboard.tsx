import { Button } from "@material-ui/core";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";

export const Dashboard = () => {
  const { setIsAuthOpen } = useAuth();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setIsAuthOpen(true)}>
        Log In
      </Button>
    </div>
  );
};
