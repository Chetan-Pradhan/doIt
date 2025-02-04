import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import Herosection from "./Herosection";
import React, { useLayoutEffect } from "react";

import "./index.css";

function App() {
  const [showNav, setshowNav] = useState(false);
  const [view, setview] = useState(false);
  const [dayN, setdayn] = useState(false);
  useLayoutEffect(() => {
    if (dayN) {
      document.body.style.backgroundColor = "#242424";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
  return (
    <>
      <NavBar
        showNav={showNav}
        setshowNav={setshowNav}
        setview={setview}
        view={view}
        dayn={dayN}
        setdayn={setdayn}
      />
      <Herosection showNav={showNav} view={view} dayn={dayN} />
    </>
  );
}

export default App;
