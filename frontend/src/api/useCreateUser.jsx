import { gql, useMutation } from "@apollo/client";
import { useLoginContext } from "../modules/useLoginContext"; // Assuming you have this context

// Define the GraphQL mutation for user creation
const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(input: { email: $email, password: $password }) {
      token
      userId
      email
    }
  }
`;

// Custom hook to handle user creation
export const useCreateUser = () => {
  const { setIsUserLoggedIn, setLoggedInUserId, setToken } = useLoginContext(); // Use context for state management
  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const createNewUser = async (email, password) => {
    try {
      const response = await createUser({
        variables: { email, password },
      });
      const { token, userId } = response.data.createUser;

      setToken(token);
      setLoggedInUserId(userId);
      setIsUserLoggedIn(true);
      localStorage.setItem("token", token);

      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return { createNewUser, data, loading, error };
};
