export const loginValidator = (userName, password) => {
  let errors = {};
  if (userName.trim() === "") {
    errors.userName = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }
  return {
    errors,
    //if no errors return empty
    valid: Object.keys(errors),
  };
};

export const registerValidator = (
  userName,
  password,
  email,
  confirmPassword
) => {
  let errors = {};
  if (userName.trim() === "") {
    errors.userName = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.password = "Password must match";
  }
  if (email.trim() === "") {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regex) === null) {
      errors.email = "You have entered an invalid email address!";
    }
  }

  return {
    errors,
    //if no errors return empty
    valid: Object.keys(errors),
  };
};
