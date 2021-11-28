import { React, useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
    // console.log("hello Anup ");
  }, []);

  const loadUsers = async () => {
    const result = await Axios.get("http://localhost:8080/users");
    console.log(result);
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    const result = await Axios.delete(
      "http://localhost:8080/users/delete/" + id
    );
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1> Home Page</h1>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col"> Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td> {data.name} </td>
                <td> {data.username} </td>
                <td> {data.email} </td>
                <td>
                  <Link class="btn btn-primary" to={"users/view/" + data.id}>
                    {" "}
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary"
                    to={"/users/edit/" + data.id}
                  >
                    {" "}
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(data.id)}
                  >
                    {" "}
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
