import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [users,setUsers] =useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/shubham`);
      const data = await response.json();
      console.log(data, "data");
      setUsers(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };
  

  useEffect(()=>{
    fetchData()
  },[])



  return (
    <div className="main">
      {users.map((ele, key) => {
        return (
          <Cards
            key={key}
            img={ele.img}
            username={ele.name}
            age={ele.age}
            city={ele.city}
            profession={ele.profession}
          />
        );
      })}
    </div>
  );
}

export default App;
