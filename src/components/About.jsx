import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiVitess } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <div>
          Hi, i'm Putri Pramuwardhani and i use Putri as my nickname across
          social medias. I'm a programmer, content creator, barista and chef.
          I’m also passionate about pop music and make portraits and universes
          around what I listen to and I’m always curious to learn more when it
          comes to new technologies and creative coding.{" "}
        </div>
        <br />
        <br />
        <br />
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <IoLogoJavascript />
          <IoLogoReact />
          <SiVitess />
          <DiCss3 />
          <SiStyledcomponents />
          <IoLogoGithub />
          <SiLeetcode />
        </div>
      </div>
    </section>
  );
}

export default About;
