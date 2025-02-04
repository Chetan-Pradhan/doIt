import { Container, Dropdown } from "react-bootstrap";
import Profile from "./Profile.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faBell as farBell } from "@fortawesome/free-regular-svg-icons";
import { faCalendar as farCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Herosection.css";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function Herosection({ showNav, view, dayn }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: todo.trim(), completed: false },
      ]);
      setTodo("");
    }
  }

  return (
    <div className="box">
      <div>
        {showNav && <Profile showNav={showNav} dayn={dayn} todos={todos} />}
      </div>
      <div
        style={{
          margin: "1rem 2rem 1rem 2rem",
          width: "100%",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className={dayn ? "dropDown active" : "dropDown"}
          >
            To do
          </Dropdown.Toggle>
          <hr />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="inputtodo">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              value={todo}
              type="text"
              className={dayn ? "todoInput active" : "todoInput"}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a task"
            ></input>
            <div className={dayn ? "iconStyle active" : "iconStyle"}>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon
                  icon={farBell}
                  style={{ margin: "0.6rem", cursor: "pointer" }}
                  className={dayn ? "windowicon active" : "windowicon"}
                />
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  style={{ margin: "0.6rem", cursor: "pointer" }}
                  className={dayn ? "windowicon active" : "windowicon"}
                />

                <input
                  type="date"
                  className={dayn ? "date2 active" : "date2"}
                ></input>
              </div>
              <div>
                <button
                  className={dayn ? "submitBtn active" : "submitBtn"}
                  type="submit"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo, id) => (
              <div key={id} className={view ? "view active" : "view"}>
                <div className={view ? "view2 active" : "view2"}>
                  <div>
                    <input
                      type="checkbox"
                      style={{
                        padding: "4px",
                        marginRight: "1rem",
                      }}
                      onClick={() => handleComplete(todo.id)}
                      onChange={(e) => {}}
                    />
                    <p className={dayn ? "text active" : "text"}>
                      {todo.text.charAt(0).toUpperCase() +
                        todo.text.slice(1).toLowerCase()}
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={farStar}
                      className={dayn ? "iconstar active" : "iconstar"}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          <p className={dayn ? "light" : ""}>Completed</p>
          <hr style={dayn ? { color: "#304031" } : {}} />
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <div
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #496E4B33",
                  padding: "16px 32px 16px 0px",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed} // Bind checkbox to `completed`
                    onClick={() => handleComplete(todo.id)} // Pass the todo's `id`
                    onChange={(e) => {}}
                    className="checkbox"
                    style={{
                      padding: "4px",
                      marginRight: "1rem",
                    }}
                  />
                  <p className={dayn ? "text active" : "text"}>
                    {todo.text.charAt(0).toUpperCase() +
                      todo.text.slice(1).toLowerCase()}
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={farStar}
                    className={dayn ? "iconstar active" : "iconstar"}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="phone">
          <div className="hover">
            <FontAwesomeIcon icon={faPlus} className="iconphone" />
            Add steps
          </div>
          <hr />
          <div className="hover">
            <FontAwesomeIcon icon={farBell} className="iconphone" />
            Set Reminder
          </div>
          <hr />
          <div className="hover">
            <input type="date" className="date"></input>
            Add a due date
          </div>
          <hr />
          <div className="hover">
            <FontAwesomeIcon icon={faArrowsRotate} className="iconphone" />
            Repeat
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
