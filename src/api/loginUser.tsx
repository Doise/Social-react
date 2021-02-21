import { useSnackbar } from "notistack";
import { gql, useMutation } from "@apollo/client";
import {
  IUserResult,
  useAuth,
} from "../components/Auth/AuthProvider/AuthProvider";

export const LOGIN_USER = gql`
  mutation loginUser($identity: String!, $password: String!) {
    loginUser(loginUserInput: { identity: $identity, password: $password }) {
      user {
        id
        username
        email
        status
      }
      token
    }
  }
`;

export const useLoginUser = () => {
  const [loginUserMutation, { loading, error }] = useMutation(LOGIN_USER);
  const { enqueueSnackbar } = useSnackbar();
  const { logIn } = useAuth();

  const loginUser = async (identity: string, password: string) => {
    try {
      const result = await loginUserMutation({
        variables: {
          identity,
          password,
        },
      });

      logIn(result.data.loginUser as IUserResult);
    } catch (e) {
      if (`${e}`.includes("Bad username/password")) {
        enqueueSnackbar("Error: bad username/password", {
          autoHideDuration: 2000,
          variant: "error",
        });
      }
    }
  };

  return { loginUser, loading, error };
};
