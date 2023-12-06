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
        // Handle error from login or other operations
        console.error("Submit handler error:", error);
        // You can set an error state here if needed
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