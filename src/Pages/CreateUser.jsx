import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../main.jsx";

function CreateUser() {
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${server}/createUser`,
        {
          name,
          hobby,
          age,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      toast.success("Added");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-light w-75">
        <h2 className="text-center py-2">Add User</h2>
        <form onSubmit={Submit}>
          <div className="form-group p-1 m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group p-1 m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Hobby"
              onChange={(e) => setHobby(e.target.value)}
            />
          </div>
          <div className="form-group p-1 m-1">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group p-1 m-1 d-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn btn-dark rounded-0 text-center px-2"
            >
              Add
            </button>
            <Link to="/" className="btn btn-dark rounded-0 text-center px-2">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
