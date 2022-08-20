import { AuthenticationError } from "apollo-server";
import jwt from "jsonwebtoken";

export const checkAuth = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid or Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]'");
  }
  throw new Error("Authentication header must be provieded");
};
