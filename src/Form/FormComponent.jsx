import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use the imported schema
  });

  const onSubmit = (data) => {
    console.log(data); // Process submitted data
    alert("Your form has been submitted successfully");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <h2>React Hook Form with Yup Validation</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>First Name:</label>
        <input type="text" {...register("firstName")} />
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input type="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label>
        <input type="password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
