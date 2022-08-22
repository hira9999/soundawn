import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

type Error = {
  userName: string | null;
  email: string | null;
  password: string | null;
};

const LoginModal = () => {
  const [errors, setErrors] = useState<Error | null>(null);

  const { onChange, onSubmit, values } = useForm(loginCallback, {
    userName: "",
    password: "",
  });

  const [login] = useMutation(LOGIN, {
    variables: values,
    update(cache, { data: { login: userData } }) {},
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.errors as Error);
    },
  });

  function loginCallback() {
    login();
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
                name="userName"
                placeholder="info@site.com"
                className="input input-bordered"
                value={values}
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
                name="password"
                className="input input-bordered"
                value={values}
                onChange={onChange}
              />
            </label>
          </div>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </form>
        {errors && (
          <div className="">
            <ul>
              {Object.values(errors).map((error, i) => (
                <li key={i}>#{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginModal;

const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(loginInput: { userName: $userName, password: $password }) {
      id
      userName
      token
      createAt
      email
    }
  }
`;
