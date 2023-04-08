import './App.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice';
import Product from './Product';

function App() {
  const view = useSelector((state) => (state.view.value));
  const dispatch = useDispatch();
  // view = 1 : browse
  // view = 2 : checkout
  // view = 3 : confirmation
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
    view === 0 ? 
    <div className="App container">
      <div class="navbar">
        <input onChange={() => {setFilter(document.getElementById("search").value.toLowerCase())}}id="search" class="search" placeholder="Search..."/>
        <button onClick={() => {dispatch(setView(1))}} type="button" class="btn btn-primary">Checkout</button>
      </div>
      <div class="productCont">
        {data.filter((element) => {
          return element.title.toLowerCase().includes(filter);
        }).map((product) => {
          return <Product {...product}/>
        })}
      </div>
    </div> : 
    view === 1 ? 
    <div className="App container">
      <div class="navbar">
        <button onClick={() => {dispatch(setView(0))}} type="button" class="btn btn-primary">Return</button>
      </div>
      
    </div> : 
    <>Confirmation Screen</>
  );
}

export default App;
