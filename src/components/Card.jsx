import React from "react";
import { usersApi } from "./../api/usersApi";

const Card = (props) => {
  // function deleteUser(id) {
  //   usersApi.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  return (
    <>
      <div className="card">
        <p className="name">Nombre: {props.name}</p>
        <div className="perfil-image"></div>
        <p className="phone-number">Teléfono: {props.phonenumber}</p>
        <div className="wrapper-links">
          <p className="email">
            Email: <a href="">{props.email}</a>
          </p>
          <p className="website">
            WebSite: <a href="">{props.website}</a>
          </p>
        </div>

        <div
          className="delete-card"
          // onClick={deleteUser(props.id)}
        >
          <svg
            className="icon-exit"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M205.65674,194.34326a7.99984,7.99984,0,1,1-11.31348,11.31348L128,139.31348,61.65674,205.65674a7.99984,7.99984,0,0,1-11.31348-11.31348L116.68652,128,50.34326,61.65674A7.99984,7.99984,0,0,1,61.65674,50.34326L128,116.68652l66.34326-66.34326a7.99984,7.99984,0,0,1,11.31348,11.31348L139.31348,128Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Card;
