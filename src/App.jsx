import list from "../images/list.png";
import module from "../images/module.png";

import { useState } from "react";
import "./App.css";
import AddList from "./components/list/AddList";
import AddModule from "./components/modul/AddModule";
import { products } from "./data";

function App() {
  const [count, setCount] = useState(list);
  const [section, setSection] = useState(list);

  function ClickBtn() {
    if (count === list) {
      setCount(module);
      setSection(module);
    } else {
      setCount(list);
      setSection(list);
    }
  }

  return (
    <>
      <div className="box_btn" onClick={ClickBtn}>
        <img src={count} className="btn" />
      </div>
      {section === list && <AddList values={products} />}
      {section === module && <AddModule values={products} />}
    </>
  );
}

export default App;
