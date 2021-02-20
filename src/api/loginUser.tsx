import { gql, useMutation } from "@apollo/client";

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

  const loginUser = async (identity: string, password: string) => {
    try {
      const result = await loginUserMutation({
        variables: {
          identity,
          password,
        },
      });
      
      return result.data.loginUser;
    } catch (e) {
      console.error(`SOCIAL ERROR: ${e}`);
    }
  };

  return { loginUser, loading, error };
};
