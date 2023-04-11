import { useSelector, useDispatch} from 'react-redux';
import { setView } from './reducers/viewSlice';
import { setFilter } from './reducers/filterSlice';
import Product from './Product';

function Browse() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => (state.filter.value));
    const data = useSelector((state) => (state.productData.value));
    
    return (  
        <div>
            <div class="navbar myNav m-3">
                <input onChange={() => {dispatch(setFilter(document.getElementById("search").value.toLowerCase()))}}id="search" class="search" placeholder="Search..."/>
                <button onClick={() => {
                    dispatch(setFilter(""));
                    dispatch(setView(1))
                }} type="button" class="btn btn-primary navButton shadow-sm">
                    Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="browseIcon bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>    
                </button>
            </div>
            <div className="App container">
                <div class="productCont">
                    {data.filter((element) => {
                        return element.title.toLowerCase().includes(filter);
                    }).map((product) => {
                        return <Product key={product.title} {...product}/>
                    })}
                </div>
            </div>
        </div>  
    );
}

export default Browse;
