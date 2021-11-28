import { React, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    // let s = "http://localhost:3002/users/${id}";
    // console.log(s);
    const result = await Axios.get("http://localhost:8080/users/" + id);
    setUser(result.data);
  };

  return (
    // <h1> User</h1>
    <div className="container">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">User Id : {id} </h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"> name : {user.name}</li>
        <li className="list-group-item"> username : {user.username}</li>
        <li className="list-group-item"> phone : {user.phone}</li>
        <li className="list-group-item"> email : {user.email}</li>
        <li className="list-group-item"> webesite : {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
