import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice';
import Product from './Product';

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => (state.productData.value));
  
  return (
    <div className="App container">
        <div class="navbar">
            <button onClick={() => {dispatch(setView(0))}} type="button" class="btn btn-primary">Return</button>
        </div>
        <div class="productCont">
              {data.filter((element) => {
                  return element.quantity > 0;
              }).map((product) => {
                  return <Product {...product}/>
              })}
          </div>
    </div>
  );
}

export default Cart;
