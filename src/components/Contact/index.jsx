import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import "./styles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const schema = yup
  .object({
    name: yup
      .string()
      .min(4, "Your name must have at least 4 characters")
      .required("You need to type your name."),
    email: yup.string().email().required("You need to type a valid e-mail."),
    message: yup
      .string()
      .min(10, "Your message must have at least 10 characters")
      .required("You need to type a message."),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_23944ej",
        "template_yxx7tmd",
        form.current,
        "SaQMaIAkU-aXUOdpn"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            allowOutsideClick: true,
            allowEscapeKey: true,
            buttonsStyling: false,
            icon: "success",
            position: "top-right",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            title: "Your message was sent!",
            toast: true,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            allowOutsideClick: true,
            allowEscapeKey: true,
            buttonsStyling: false,
            icon: "error",
            position: "top-right",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            title: "Something went wrong. Try again, please!",
            toast: true,
          });
        }
      );
  };
  return (
    <div className="flex flex-col items-center justify-center mt-20 shadow-xl p-10 bg-sky-950">
      <h1 className="text-sky-50 text-6xl mb-5 font-poppins">Contact me</h1>
      <form ref={form} className="flex flex-col">
        <label htmlFor="name">
          <input
            className="p-5 text-sky-50 border-t-0 border-b-2 border-sky-950 bg-transparent m-5"
            type="text"
            id="name"
            placeholder="Your full name"
            {...register("name")}
          />
          {errors?.name && (
            <p className="text-lg text-red-600 font-bold italic">
              {errors.name.message}
            </p>
          )}
        </label>
        <label htmlFor="email">
          <input
            className="p-5 text-sky-50 border-t-0 border-b-2 border-sky-950 bg-transparent m-5"
            type="email"
            id="email"
            placeholder="Your best e-mail"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-lg text-red-600 font-bold italic">
              {errors?.email.message}
            </p>
          )}
        </label>
        <label htmlFor="message">
          <input
            className="p-5 text-sky-50 border-t-0 border-b-2 border-sky-950 bg-transparent m-5"
            type="text"
            name=""
            id="message"
            placeholder="Send me a message..."
            {...register("message")}
          />
          {errors?.message && (
            <p className="text-lg text-red-600 font-bold italic">
              {errors.message.message}
            </p>
          )}
        </label>
      </form>
      <Button
        btnContent="Send Message"
        btnType="submit"
        onClick={handleSubmit(sendEmail)}
        btnId="contact-btn"
      />
    </div>
  );
};

export default Contact;
