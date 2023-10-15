import React from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useEffect, useState } from "react";

function Friend() {
  //const { id } = useParams();

  const params = useParams();
  const id = params.id;
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`friends/${id}`)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.error(err.response.message));
  }, []);
  return (
    <div>
      <h1>{friend.name}</h1>
      <div>
        {friend.name}-{friend.email}
      </div>
    </div>
  );
}

export default Friend;
