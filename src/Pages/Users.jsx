import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { server } from "../main.jsx";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}`, { withCredentials: true });
        setUsers(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`${server}/deleteUser/` + id);
      window.location.reload();
      toast.success("Deleted", { duration: 2000 });
    } catch (error) {
      console.log(error);
      toast.error("Error Occur");
    }
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center bg-dark">
        <div className="p-1 rounded bg-light">
          <div className="d-grid gap-2 d-md-block">
            <Link to="/create" className="btn btn-primary my-1">
              Add New
            </Link>
          </div>
          <table className="table table-light rounded table-bordered border-dark">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Hobby</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No Users available
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.hobby}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-success btn-sm mx-1"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                      <Link
                        className="btn btn-danger btn-sm"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
