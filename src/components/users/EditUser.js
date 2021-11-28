import Axios from "axios";
import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    // let s = "http://localhost:3002/users/${id}";
    // console.log(s);
    const result = await Axios.get("http://localhost:8080/users/" + id);
    setUser(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.put("http://localhost:8080/users/" + id, user);
    history.push("/");
  };
  return (
    // <h1> Add User</h1>

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"> Edit User </h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div class="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              class="form-control form-control-lg"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              name="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div class="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your phone number"
              name="phone"
              value={user.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div class="form-group">
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              type="test"
              class="form-control form-control-lg"
              placeholder="Enter Your Website"
              name="website"
              value={user.website}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
          <button type="submit" class="btn btn-primary">
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
