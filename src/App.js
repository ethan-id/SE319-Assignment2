import './App.css';
import { useState, useEffect } from "react";
import Product from './Product';

function App() {
  // view = 1 : browse
  // view = 2 : checkout
  // view = 3 : confirmation
  const [view, setView] = useState(0);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
      fetchData();
  }, []); 

  const fetchData = async () => {
      let response = await (
          await fetch("data.json")
      ).json();
      setData(response);
  };
  
  return (
    view === 0 ? <div className="Browse container">
      <div class="navbar">
        <input onChange={() => {setFilter(document.getElementById("search").value.toLowerCase())}}id="search" class="search" placeholder="Search..."/>
        <button onClick={() => {setView(1)}} type="button" class="checkout btn btn-primary">Checkout</button>
      </div>
      <div class="productCont">
        {data.filter((element) => {
          return element.title.toLowerCase().includes(filter);
        }).map((product) => {
          return <Product {...product}/>
        })}
      </div>
    </div> : view === 1 ? <></> : <>Confirmation Screen</>
  );
}

export default App;
