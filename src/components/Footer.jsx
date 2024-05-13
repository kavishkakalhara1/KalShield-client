import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-gray-100">
      <div className="w-full">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <Link
            to="/"
            className="text-3xl font-bold dark:text-white md:text-4xl md:items-center"
          >
            <img src="src/assets/BabyHackerTextLogo_White.png" className="h-auto w-60"/>
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/kavishkakalhara1" target="_blank">Github</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/kavishkakalhara/" target="_blank">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Kavishka Kalhara™" year={new Date().getFullYear()} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/kavishkakalhara1" icon={BsGithub} target="_blank"/>
            <Footer.Icon href="https://www.linkedin.com/in/kavishkakalhara/" icon={BsLinkedin} target="_blank"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
