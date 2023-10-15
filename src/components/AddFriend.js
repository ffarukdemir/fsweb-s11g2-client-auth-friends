import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

function AddFriend() {
  const history = useHistory();

  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("friends", newFriend)
      .then((res) => {
        console.log(res);
        history.push("/Friends");
      })

      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <div>
      <h1>Add Friend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
