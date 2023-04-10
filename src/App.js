import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductData } from './reducers/productDataSlice';
import Browse from './Browse';
import Cart from './Cart';

function App() {
    const view = useSelector((state) => (state.view.value));
    const dispatch = useDispatch();

    const fetchData = async () => {
        let response = await (
            await fetch("data.json")
        ).json();
        response.forEach((product) => {
            product["quantity"] = 0;
        })
        console.log("fetched product d")
        dispatch(setProductData((response)));
    };

    useEffect(() => {
        fetchData();
    }, []);
  
    return (
      view === 0 ? 
      <Browse/> : 
      view === 1 ? 
      <Cart/> : 
      <>Confirmation Screen</>
    );
}

export default App;
