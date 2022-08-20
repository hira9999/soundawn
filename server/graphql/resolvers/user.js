import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../../models/User.js";
import { loginValidator, registerValidator } from "../../utils/validate.js";
import { UserInputError } from "apollo-server";
import "dotenv/config";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      userName: user.userName,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24h" }
  );
};

export const userResolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    login: async (_, { loginInput: { userName, password } }) => {
      const { errors, valid } = loginValidator(userName, password);
      const user = await User.findOne({ userName });

      if (!valid) {
        throw new UserInputError("validation error", { errors });
      }
      //When the user does not exist
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("Wrong credentials", { errors });
      }
      //When the password is wrong
      const bcryptMatch = await bcrypt.match(password, user.password);
      if (!bcryptMatch) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }
      const token = generateToken(user);

      return {
        ...user._doc,
        id: user.id,
        token,
      };
    },
    register: async (
      _,
      { registerInput: { userName, password, email, confirmPassword } },
      context,
      info
    ) => {
      const { errors, valid } = registerValidator(
        userName,
        password,
        email,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("validation error", { errors });
      }

      //Duplicate user
      const user = await User.findOne({ userName });
      if (user) {
        throw new UserInputError("This user already exist", {
          errors: {
            userName: "This user already exist",
          },
        });
      }

      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        userName,
        password,
        email,
        createAt: new Date().toISOString(),
      });

      const res = await newUser.save();
      const token = generateToken(res);

      return {
        id: res.id,
        ...res._doc,
        token,
      };
    },
  },
};
