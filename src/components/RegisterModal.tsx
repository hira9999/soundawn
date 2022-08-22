import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const RegisterModal = () => {
  const [errors, setErrors] = useState<Error | null>(null);

  const { onChange, onSubmit, values } = useForm(addUser, {
    userName: "",
    password: "",
    email: "",
    comfirmPassword: "",
  });

  const [register] = useMutation(REGISTER_USER, {
    variables: values,
    update(cache, { data: { login: userData } }) {},
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.errors as Error);
    },
  });

  function addUser() {
    register();
  }
  return (
    <>
      <div className="p-7">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group input-group-vertical">
              <span>User Name</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                value={values}
                name="userName"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group input-group-vertical">
              <span>Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                value={values}
                name="email"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group input-group-vertical">
              <span>Password</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                value={values}
                name="password"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group input-group-vertical">
              <span>Comfirm Password</span>
              <input
                type="text"
                className="input input-bordered"
                value={values}
                name="comfirmPassword"
                onChange={onChange}
              />
            </label>
          </div>
          <button type="submit" className="btn">
            REGISTER
          </button>
        </form>
      </div>

      {errors && (
        <div className="">
          <ul>
            {Object.values(errors).map((error, i) => (
              <li key={i}>#{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RegisterModal;

const REGISTER_USER = gql`
  mutation register(
    $userName: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      registerInput: {
        userName: $userName
        password: $password
        confirmPassword: $confirmPassword
        email: $email
      }
    ) {
      id
      userName
      token
      createAt
      email
    }
  }
`;
