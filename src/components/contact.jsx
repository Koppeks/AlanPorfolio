import React from "react";
import { Formik } from "formik";
import { basicSchema } from "../schemas";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const notifySuccess = () => {
    toast.success("El mensaje se envio correctamente");
  };
  const notifyError = () => {
    toast.error("Hay un error en los campos!");
  };

  return (
    <div className="contact">
      <h2>Contactame</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={basicSchema}
        onSubmit={(values, { resetForm }) => {
          const data = {
            name: values.name,
            email: values.email,
            message: values.message,
          };
          emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            data,
            import.meta.env.VITE_PUBLIC_KEY
          );

          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { name, email, message } = values;

          return (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="contact_form"
              id="form"
              novalidate
            >
              <section>
                <input
                  value={name}
                  name="name"
                  type="text"
                  required
                  form="novalidateform"
                  autocomplete="off"
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                <label>Nombre</label>
                {touched.name && errors.name ? (
                  <p className="error_form">{errors.name}</p>
                ) : null}
              </section>
              <section>
                <input
                  value={email}
                  name="email"
                  type="text"
                  required
                  form="novalidateform"
                  autocomplete="off"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <label>Email</label>
                {touched.email && errors.email ? (
                  <p className="error_form">{errors.email}</p>
                ) : null}
              </section>
              <section>
                <textarea
                  value={message}
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  form="novalidateform"
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                ></textarea>
                <label>Mensaje</label>
                {touched.message && errors.message ? (
                  <p className="error_form">{errors.message}</p>
                ) : null}
              </section>
              {Object.keys(errors).length > 0 ? (
                <button className="button disabled" onClick={notifyError}>
                  <p>Enviar email</p>
                </button>
              ) : (
                <button
                  className="button"
                  onClick={() => {
                    handleSubmit();
                    notifySuccess();
                  }}
                >
                  <p>Enviar email</p>
                </button>
              )}
            </form>
          );
        }}
      </Formik>
      <div className={`contact_animation_reveal`}></div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="colored"
        transition={Flip}
      />
    </div>
  );
}
