import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/api/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      });
  }, [message]);

  return !loading ? <div>{message}</div> : <div>loading...</div>;
};

export default App;
