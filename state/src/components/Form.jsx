import React from "react";
import { useFormStore } from "../../store/formStore";
const Form = () => {
  const { formData, setFormData, clearFormData } = useFormStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={clearFormData}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
