import "./App.css";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";

import React, { useEffect, useState } from "react";
import { usersApi } from "./api/usersApi";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
        localStorage.setItem("data", JSON.stringify(data));
      });

    // usersApi.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
    //   console.log(res.data);
    //   setUsers(res.data);
    // });
  }, []);


  let newSortedList = [...users].sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );

  return (
    <div className="App">
      <Header />
      <div className="wrapper-list">
        <div className="list">
          {newSortedList
            .sort((a, b) => a - b)
            .map((user) => (
              <Card
                key={user.id}
                name={user.name}
                phonenumber={user.phone}
                email={user.email}
                website={user.website}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
