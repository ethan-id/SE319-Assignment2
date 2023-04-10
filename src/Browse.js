import { useSelector, useDispatch} from 'react-redux';
import { setView } from './reducers/viewSlice';
import { setFilter } from './reducers/filterSlice';
import Product from './Product';

function Browse() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => (state.filter.value));
    const data = useSelector((state) => (state.productData.value));
    
    return (    
        <div className="App container">
            <div class="navbar">
                <input onChange={() => {dispatch(setFilter(document.getElementById("search").value.toLowerCase()))}}id="search" class="search" placeholder="Search..."/>
                <button onClick={() => {
                    dispatch(setFilter(""));
                    dispatch(setView(1))
                }} type="button" class="btn btn-primary">Checkout</button>
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
