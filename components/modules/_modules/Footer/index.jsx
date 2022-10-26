import React from "react";
import Link from "next/link";
import InstagramOutlinedIcon from "../../vectors/InstagramOutlinedIcon";
import FacebookOutlinedIcon from "../../vectors/FacebookOutlinedIcon";

const Footer = () => {
  return (
    <section className="bg-content-green-primary text-white py-28">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">Buildit</h1>
            </Link>
            <p className="text-base">Development company, 2022</p>
          </div>
          <div>
            <p className="text-base">
              Site design –
              <span className="underline underline-offset-1 pl-1">
                ⏰ Alarm
              </span>
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-7 text-base">
          <li className="cursor-pointer">Service 1</li>
          <li className="cursor-pointer">Service 2</li>
          <li className="cursor-pointer">Service 3</li>
          <li className="cursor-pointer">Service 4</li>
          <li className="flex gap-3">
            <span className="bg-white/20 p-2 rounded-xl cursor-pointer">
              <InstagramOutlinedIcon />
            </span>
            <span className="bg-white/20 py-2 px-3 rounded-xl cursor-pointer">
              <FacebookOutlinedIcon />
            </span>
          </li>
        </ul>

        <ul className="flex flex-col gap-7 text-base">
          <Link href="/about">
            <li className="cursor-pointer">About us</li>
          </Link>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>

        <ul className="flex flex-col gap-7 text-base justify-between">
          <ul className="space-y-5">
            <li className="cursor-pointer">Get in touch</li>
            <li className="leading-[32px] cursor-pointer">
              60 Manor Station St. Fairport,
              <br /> NY 14450
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="cursor-pointer">708-790-0000</li>
            <li className="cursor-pointer">sales@buildit.site</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
