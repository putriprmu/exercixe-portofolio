import profilePicture from "../assets/profile.png";
import { ImInstagram } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Putri Pramuwardhani</h3>
        <p>Programmer - Content Creator - Barista - Chef</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/putriprmu/">
            <ImInstagram />
          </a>
          <a href="https://www.tiktok.com/@putriprmu">
            <FaTiktok />
          </a>
          <a href="https://github.com/putriprmu">
            <IoLogoGithub />
          </a>
          <a href="https://leetcode.com/u/putriprmu/">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
