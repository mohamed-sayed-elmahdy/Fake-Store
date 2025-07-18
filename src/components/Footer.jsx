
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
<div className="text-center py-4 bg-gray-800 text-white">
        <div className="capitalize"> all rights reserved © 2025, developed by Mohamed Sayed Elmahdy</div>
    <div className="flex justify-center space-x-4 py-2 text-lg">
        <a href="https://github.com/mohamed-sayed-elmahdy"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/mohamed-sayed-elmahdy-23653b220/"><FaLinkedin /></a>
    </div>
</div>
  )
}

export default Footer;