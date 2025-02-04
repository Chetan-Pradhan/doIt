import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faBookOpen,
  faChalkboardUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";

import { faCalendarDays as farCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { Container } from "react-bootstrap";

export default function Profile({ showNav, dayn, todos }) {
  return (
    <div className={showNav ? "slide active" : "slide"}>
      <div className={dayn ? "cont1 active" : "cont1"}>
        <div className={dayn ? "profileLogo active" : "profileLogo"}>
          <FontAwesomeIcon icon={farUser} className="icon" />
        </div>
        <h1 className={dayn ? "profileText active" : "profileText"}>
          Hey, Abcd
        </h1>
        <div className={dayn ? "box1 active" : "box1"}>
          <ul className={dayn ? "listItem active" : "listItem"}>
            <li className={dayn ? "profileOption active" : "profileOption"}>
              <FontAwesomeIcon
                icon={faListCheck}
                style={{ marginRight: "0.6rem" }}
              />
              All Tasks
            </li>
            <li className={dayn ? "profileOption active" : "profileOption"}>
              <FontAwesomeIcon
                icon={farCalendarDays}
                style={{ marginRight: "0.6rem" }}
              />
              Today
            </li>
            <li className={dayn ? "profileOption active" : "profileOption"}>
              <FontAwesomeIcon
                icon={farStar}
                style={{ marginRight: "0.6rem" }}
              />
              Important
            </li>
            <li className={dayn ? "profileOption active" : "profileOption"}>
              <FontAwesomeIcon
                icon={faBookOpen}
                style={{ marginRight: "0.6rem" }}
              />
              Planned
            </li>
            <li className={dayn ? "profileOption active" : "profileOption"}>
              <FontAwesomeIcon
                icon={faChalkboardUser}
                style={{ marginRight: "0.6rem" }}
              />
              Assigned to me
            </li>
          </ul>
        </div>
        <div className={dayn ? "add active" : "add"}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ margin: "0 0.4rem 0 0.4rem", fontSize: "18px" }}
          />
          Add list
        </div>
        <div className={dayn ? "taskCont active" : "taskCont"}>
          <div style={{ marginLeft: "0.6rem" }}>
            Today Tasks <br />
            <p style={{ fontSize: "21.27px", fontWeight: "500" }}>
              {todos.length}
            </p>
          </div>
          <hr></hr>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="loader"></div>
          </div>
          <ul className="list">
            <li className="pending">Pending</li>
            <li className="done">Done</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
