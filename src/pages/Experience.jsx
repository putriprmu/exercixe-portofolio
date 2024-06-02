import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { PiChefHat } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";
import { BsCalendar2Heart } from "react-icons/bs";
import { MdOutlineRoomService } from "react-icons/md";
import { SiStarbucks } from "react-icons/si";
import { MdComputer } from "react-icons/md";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import background from "../assets/bgexp.gif";

function Experience() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          minHeight: "150vh",
        }}
      >
        <Navbar />
        <div className="wrapper">
          <h1>My Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<PiChefHat />}
            >
              <h3 className="vertical-timeline-element-title">
                On The Job Training Cook Helper
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Grand Tjokro Hotel Premiere Bandung
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2019"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<MdEventNote />}
            >
              <h3 className="vertical-timeline-element-title">
                Leader Team of CEO (Casual Event Organize)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Grand Tjokro Hotel Premiere Bandung, Intercontinental Hotel
                Bandung, Pola Catering, Zulfa Catering, Tien's Catering, Rumah
                Pengantin Catering, Destiny Catering, Celdi Catering
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<BsCalendar2Heart />}
            >
              <h3 className="vertical-timeline-element-title">
                WO (Wedding Organizer)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                King Wedding Organizer
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<MdOutlineRoomService />}
            >
              <h3 className="vertical-timeline-element-title">Daily Worker</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ibis Hotel Trans Studio Bandung
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2022"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<SiStarbucks />}
            >
              <h3 className="vertical-timeline-element-title">
                Coffee Master Barista
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Starbucks Coffee Company
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024 - Present"
              iconStyle={{ background: "#222831", color: "#fff" }}
              icon={<MdComputer />}
            >
              <h3 className="vertical-timeline-element-title">Programmer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Boothcamp Purwadhika
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Experience;
