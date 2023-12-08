import { useState } from "react";

export default function useForm(submitHandler, initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
  
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      try {
        await submitHandler(values);
      } catch (error) {
        if (error.message === "Invalid email or password") {
          setErrors({ loginError: "Invalid email or password" });
        } else {
          console.error("Submit handler error:", error);
        }
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
    errors,
  };
}