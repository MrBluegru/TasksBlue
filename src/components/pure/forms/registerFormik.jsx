import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  let user = new User();

  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role is require"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    // .matches(``),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    alert("Register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1500));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="userName">User Name</label>
            <Field
              id="userName"
              type="text"
              name="userName"
              placeholder="yourName"
            />
            {errors.userName && touched.userName && (
              <ErrorMessage name="userName" component="div" />
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="yourPassw"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}
            <label htmlFor="confirm">Confirm Password</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="yourPassw"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}

            <button type="submit">Submit</button>
            {isSubmitting ? <p>Register your credentials</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
