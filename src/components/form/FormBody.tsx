import type { NextPage } from "next";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "../../assets/styles/form.module.scss";

const FormBody: NextPage = () => {
  let validationSchema = yup.object().shape({
    name: yup.string().required("enter name"),
    email: yup.string().email("enter email"),
    password: yup.string().min(8, "min 8").required("required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.form_container}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className="text_field"
          fullWidth
          id="name"
          name="name"
          label="Name"
          data-cy="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className="text_field"
          fullWidth
          id="email"
          name="email"
          label="Email"
          data-cy="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className="text_field"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          data-cy="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" data-cy="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormBody;
