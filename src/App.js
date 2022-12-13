import "./styles.css";
import { useState } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [data, setData] = useState("");
  const [cities, setCities] = useState([]);

  const addCities = (e) => {
    //Complete function
    e.preventDefault();
    if (data != "") {
      const alldata = { id: new Date().getTime().toString(), name: data };
      setCities([...cities, alldata]);
    }
    setData("");
  };
  const RemoveItems = (index) => {
    const updatecities = cities.filter((ele) => {
      return index !== ele.id;
    });
    setCities(updatecities);
  };

  return (
    <div className="App">
      <form onSubmit={addCities}>
        <input
          type="text"
          placeholder="Enter city Name"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Add</button>
        <ul>
          {cities.map((el) => (
            <li >
              <span key={el.id}>{el.name}</span>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => RemoveItems(el.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
