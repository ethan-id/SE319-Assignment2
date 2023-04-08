import './Browse.css';
import { useState, useEffect } from "react";
import Product from './Product';

function Browse() {
  // view = 1 : browse
  // view = 2 : checkout
  // view = 3 : confirmation
  const [view, setView] = useState(0);
  const [data, setData] = useState([]); 

  useEffect(() => {
      fetchData();
  }, []); 

  const fetchData = async () => {
      let response = await (
          await fetch("data.json")
      ).json();
      setData(response);
  };

  console.log(data);
  
  return (
    view === 0 ? <div className="Browse container">
      <input class="search" placeholder="Search..."></input>
      <button onClick={() => {setView(1)}} type="button" class="checkout btn btn-primary">Checkout</button>
      <div class="productsCont row row-cols-4">
        {data.map((product) => {
          return <Product {...product}/>
        })}
      </div>
    </div> : view === 1 ? <>Checkout Screen</> : <>Confirmation Screen</>
  );
}

export default Browse;
