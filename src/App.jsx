import "./App.css";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";

import React, { useEffect, useState } from "react";
import { usersApi } from "./api/usersApi";

const App = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // setUsers(data);

      // Aquí GUARDO la data sin ordenar en el localstorage
      // localStorage.setItem("data", JSON.parse(data));
      // data = JSON.stringify(data);
      
      // Aquí ordeno la data por orden de nombres
      let SortedList = data.sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      // console.log(SortedList);


      // Aquí envío la data ordenada al localStorage
      localStorage.setItem("ordenedData", JSON.stringify(SortedList));
    });
  // Aquí obtengo la data del localStorage
  let listUsers = JSON.parse(localStorage.getItem("ordenedData"));


  // console.log(listUsers)
  // debugger

  // usersApi.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
  //   console.log(res.data);
  //   setUsers(res.data);
  // });
  // }, []);

  // let dataordenedLocalStorage = JSON.parse(localStorage.getItem("ordenedData"));

  return (
    <div className="App">
      <Header />
      <div className="wrapper-list">
        <div className="list">
          {listUsers
            .sort((a, b) => a - b)
            .map((user, index) => (
              <Card
                position={index}
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
