import React, { useState } from "react";
const Contact = () => {
  const [btnStatus, setBtnStatus] = useState("Send");
  const submitHandler = (e) => {
    e.preventDefault();
    setBtnStatus("Sending");
    const { name, email, message } = e.target.elements;
    const values = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(values);
    setBtnStatus("Send");
  };
  return (
    <div
      name="Contact"
      className="w-full h-96 bg-[#ee7f79] flex justify-center items-center"
    >
      <form
        onSubmit={submitHandler}
        action="mailto:andonecristi95@yahoo.com"
        method="POST"
        encType="text/plain"
        className="w-1/2 h-full bg-[#EE7F79] flex flex-col justify-center gap-3 p-12"
      >
        <label className="font-bold"> Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name "
          className="border-b-2 border-slate-950/80 bg-[#ee7f79] placeholder:text-slate-50 outline-none "
        ></input>
        <label className="font-bold"> Email</label>

        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="border-b-2 border-slate-950/80 bg-[#ee7f79] placeholder:text-slate-50 outline-none "
        ></input>
        <label className="font-bold"> message</label>

        <input
          type="text"
          id="message"
          placeholder="Your message "
          className="border-b-2 border-slate-950/80 bg-[#ee7f79] placeholder:text-slate-50 outline-none "
        ></input>
        <button
          type="submit"
          value="send"
          className=" w-24 h-24 flex justify-center items-center sm:w-full mt-5 bg-slate-950/80 text-slate-50 rounded-md hover:scale-105 "
        >
          {btnStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;
