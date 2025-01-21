import { ApolloError } from "apollo-server";
import jwt from "jsonwebtoken";

const users = [
  {
    id: "1",
    username: "john",
    password: "password123",
    email: "john@example.com",
  },
  // Add more users as needed
];

const resolvers = {
  Query: {
    getUser: () => {
      // Dummy implementation, replace with your actual logic
      return { id: "1", username: "john", email: "john@example.com" };
    },
  },
  Mutation: {
    login: async (
      _: any,
      { username, password }: { username: string; password: string }
    ) => {
      const user = users.find((user) => user.username === username);

      if (!user || user.password !== password) {
        throw new ApolloError("Invalid credentials", "UNAUTHORIZED");
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );

      return {
        token,
        user,
      };
    },
  },
};
