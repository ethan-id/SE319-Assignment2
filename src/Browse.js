import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice';
import { setProductData } from './reducers/productDataSlice';
import { setFilter } from './reducers/filterSlice';
import Product from './Product';

function Browse() {
    const data = useSelector((state) => (state.productData.value))
    const filter = useSelector((state) => (state.filter.value));
    const dispatch = useDispatch();

    const fetchData = async () => {
        let response = await (
            await fetch("data.json")
        ).json();
        dispatch(setProductData((response)));
    };

    useEffect(() => {
        fetchData();
    }, []); 
    
    return (
        <div className="App container">
            <div class="navbar">
                <input onChange={() => {dispatch(setFilter(document.getElementById("search").value.toLowerCase()))}}id="search" class="search" placeholder="Search..."/>
                <button onClick={() => {dispatch(setView(1))}} type="button" class="btn btn-primary">Checkout</button>
            </div>
            <div class="productCont">
                {data.filter((element) => {
                    return element.title.toLowerCase().includes(filter);
                }).map((product) => {
                    return <Product {...product}/>
                })}
            </div>
        </div>
    );
}

export default Browse;
