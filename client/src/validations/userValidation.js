export const validateRegister = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 4) {
    errors.password = "Password must be at least 4 characters.";
  }

  if (!values.rePassword) {
    errors.rePassword = "Repeat Password is required.";
  }

  if (values.password !== values.rePassword) {
    errors.rePassword = "Passwords do not match.";
  }

  return errors;
};

export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
};
