import Link from "next/link";
import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <section className="flex justify-between items-center pt-16">
      <div className="flex gap-4 items-center">
        <div className="bg-primary-green h-13 w-13 rounded-full" />
        <Link href="/">
          <h1 className="text-content-green-primary font-bold text-2xl cursor-pointer">
            Buildit
          </h1>
        </Link>
      </div>
      <ul className="flex justify-around text-content-green-secondary text-xsm font-medium w-1/2">
        <Link href="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <Button title="Need a projets ?" />
    </section>
  );
};

export default Header;
