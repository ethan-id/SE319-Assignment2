import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductData } from './reducers/productDataSlice';
import Browse from './Browse';
import Cart from './Cart';

function App() {
    const dispatch = useDispatch();
    const view = useSelector((state) => (state.view.value));

    const fetchData = async () => {
        let response = await (
            await fetch("data.json")
        ).json();
        response.forEach((product) => {
            product["quantity"] = 0;
        });
        dispatch(setProductData((response)));
    };

    useEffect(() => {
        fetchData();
    }, []);
  
    return (
      <div class="App">
        {view === 0 ? 
        <Browse/> : 
        view === 1 ? 
        <Cart/> : 
        <>Confirmation Screen</>}
        <hr class="mt-5"/>
        <footer class="footer mb-3">
            <p>Designed and Curated by Ethan Hancock & Christian Deam</p>
            <p>Last Updated: 4/10/2023</p>
        </footer>
      </div>
    );
}

export default App;
