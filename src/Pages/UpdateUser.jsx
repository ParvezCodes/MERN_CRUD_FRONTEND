import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../main.jsx";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [hobby, setHobby] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}/getUser/` + id);
        setName(res.data.user.name);
        setHobby(res.data.user.hobby);
        setAge(res.data.user.age);
      } catch (error) {
        console.log(error);
        toast.error("Error Occur");
      }
    };

    fetchData();
  }, []);

  const update = (e) => {
    e.preventDefault();
    try {
      const res = axios.put(
        `${server}/updateUser/` + id,
        {
          name,
          hobby,
          age,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("User Updated");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error Occur");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-light w-75">
        <h2 className="text-center py-2">Update User</h2>
        <form onSubmit={update}>
          <div className="form-group p-1 m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group p-1 m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Hobby"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
          </div>
          <div className="form-group p-1 m-1">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group p-1 m-1 d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-dark rounded-0 text-center"
            >
              Update
            </button>
            <Link to="/" className="btn btn-dark rounded-0 text-center">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
