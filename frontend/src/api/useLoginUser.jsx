import { gql, useMutation } from "@apollo/client";
import { useLoginContext } from "../modules/useLoginContext";

// Define the GraphQL mutation for login
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export const useLoginUser = () => {
  const { setIsUserLoggedIn, setLoggedInUserId, setToken } = useLoginContext();
  const [loginIn] = useMutation(LOGIN_USER);

  return async (email, password) => {
    try {
      const { data } = await loginIn({
        variables: {
          email,
          password,
        },
      });

      const { token, userId } = data.login;
      setLoggedInUserId(userId);
      setIsUserLoggedIn(true);
      setToken(token);
      localStorage.setItem("token", token);

      return data;
    } catch (err) {
      console.error("Error during login:", err.message);
      throw err;
    }
  };
};
