/* eslint-disable @next/next/no-img-element */
import React from "react";
import MailIcon from "../../vectors/MailIcon";
import PhoneIcon from "../../vectors/PhoneIcon";
import inputBg from "../../../assets/contact-input-bg.png";
import Button from "../Button";

const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <p className="text-sky-magnatat ">Contact</p>
            <h2 className="text-4xl text-content-green-primary font-bold">
              Get In Touch
            </h2>
          </div>

          <div className="flex flex-col gap-7 mt-24">
            <div className="flex gap-5 items-center">
              <div className="bg-secondary-bg flex justify-center items-center p-5 rounded-md">
                <PhoneIcon />
              </div>
              <p className="flex flex-col gap-1">
                <span className=" text-content-green-secondary text-base">
                  Tel
                </span>
                <span className="text-xs2xl text-content-green-primary font-bold">
                  708-790-0000
                </span>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-secondary-bg flex justify-center items-center p-5 rounded-md">
                <MailIcon />
              </div>
              <p className="flex flex-col gap-1">
                <span className=" text-content-green-secondary text-base">
                  Email
                </span>
                <span className="text-xs2xl text-content-green-primary font-bold">
                  sales@buildit.site
                </span>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-secondary-bg flex justify-center items-center p-5 rounded-md">
                <MailIcon />
              </div>
              <p className="flex flex-col gap-1">
                <span className=" text-content-green-secondary text-base">
                  Office
                </span>
                <span className="text-xs2xl text-content-green-primary font-bold">
                  60 Manor Station St. <br />
                  Fairport, NY 14450
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-[475px] h-[508px] relative p-10 flex flex-col justify-between ml-auto shadow-2xl shadow-btn-shadow rounded-md">
          <img
            src={inputBg.src}
            alt="contact input bg"
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          />
          <div className="grid grid-cols-2 gap-3">
            <div className=" flex flex-col gap-2 z-20">
              <label
                htmlFor="name"
                className="text-content-green-secondary text-sm "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-transparent border border-content-green-primary rounded-md py-2 w-full outline-none px-2 text-content-green-primary"
              />
            </div>
            <div className="flex flex-col gap-2 z-20">
              <label
                htmlFor="email"
                className="text-content-green-secondary text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-transparent border border-content-green-primary rounded-md py-2 outline-none px-2 text-content-green-primary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 z-20">
            <label
              htmlFor="subject"
              className="text-content-green-secondary text-sm "
            >
              Subject
            </label>
            <input
              type="email"
              name="Subject"
              className="bg-transparent border border-content-green-primary rounded-md py-2 outline-none px-2 text-content-green-primary"
            />
          </div>

          <div className="flex flex-col gap-2 z-20">
            <label
              htmlFor="subject"
              className="text-content-green-secondary text-sm "
            >
              Message
            </label>
            <textarea
              name="message"
              className="h-[8.125rem] outline-none resize-none bg-transparent border border-content-green-primary rounded-md  p-2 text-content-green-primary"
            />
          </div>

          <Button
            title="Send message"
            className="bg-primary-green rounded-xsm text-white h-11 w-full font-bold z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
