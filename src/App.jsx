import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "./componets/Form";
function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      status: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <>
      <h1 className="bg-red-600">
        Heelllooo!!!EveryOne itzz time to learn form handling uisng Formik
      </h1>
      <Form />
    </>
  );
}

export default App;
