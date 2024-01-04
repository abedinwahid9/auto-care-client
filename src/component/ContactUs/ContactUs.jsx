import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjx8bc8",
        "template_jr5twkd",
        form.current,
        "Vf6SwbM32LIPJI-sS"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("we are contact with you soon");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="mt-10 py-5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://i.ibb.co/85VkNgQ/peakpx.jpg)" }}
    >
      <div className="py-10 md:px-6 px-2">
        <h2 className="text-center text-textColors md:text-4xl text-xl font-extrabold">
          Contact Us
        </h2>
        <div className="divider divide-white w-3/4 mx-auto"></div>{" "}
        <div className="flex gap-10 justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col  md:w-3/4 gap-6"
          >
            <div className="h-12 flex rounded-lg bg-[#92919136] ">
              <input
                className="w-full bg-transparent p-4 text-textColors focus:outline-none"
                type="text"
                placeholder="Name"
                name="user_name"
              />
            </div>
            <div className="h-12 flex rounded-lg bg-[#92919136] ">
              <input
                className="w-full bg-transparent p-4 text-textColors focus:outline-none"
                type="email"
                placeholder="Email"
                name="user_email"
                id=""
              />
            </div>
            <div className=" flex rounded-lg bg-[#92919136]">
              <textarea
                className="textarea textarea-bordered h-24 w-full h-full bg-transparent p-4 text-textColors focus:outline-none"
                placeholder="Message"
                name="message"
              ></textarea>
            </div>
            <input
              className="btn bg-btnColors border-none text-[white] w-full text-base font-medium"
              type="submit"
              value="Send messsage"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
