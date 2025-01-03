import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/shubham").then((res) => {
      console.log(res);
      setData(res.data);
      console.log(data);
  
    });
  }, []);

  return <>
  
  <h1>First Name {data?.firstName}</h1>
  <h1>Age {data?.age}</h1>
  <h1>Grade {data?.grade}</h1>
  <h1>Subject 1 {data?.subjects[0]}</h1>
  <h1>Subject 2 {data?.subjects[1]}</h1>
  <h1>Subject 3 {data?.subjects[2]}</h1>
  
  
  </>;
}

export default App;
