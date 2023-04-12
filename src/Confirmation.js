import './styles/Confirmation.css';
import { setProductData } from "./reducers/productDataSlice";
import { setView } from "./reducers/viewSlice";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from './CartProduct';

const Confirmation = () => {
    const data = useSelector((state) => (state.productData.value));
    const dispatch = useDispatch();
    const newData = structuredClone(data);
    newData.forEach((product) => {
        product.quantity = 0;
    });

    return (
        <div>
            <div class="navbar myNav m-3">
                <button onClick={() => {
                    dispatch(setView(0));
                    dispatch(setProductData(newData));
                }} type="button" class="btn btn-primary navButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="returnIcon bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    Return
                </button>
            </div>

            {/* add confirmation screen here */}
            You will spend {localStorage.getItem("total")} by purchasing *these* products
            {data.filter((element) => {
                    return element.quantity > 0;
                }).map((product) => {
                    return (
                        <div key={product.title}>
                            <CartProduct {...product}/>
                            <hr/>
                        </div>
                    );
                })}
                
            Would you like to confirm your order?
            <span class="br"></span>

            <a onClick={() => {
                pop();
            }} class="button button1">Yes</a>
            <div id="box">
                <h1>Thank you for your purchase!</h1>
                <p>Your order will be delivered within 5-7 business days!</p>
                <a onClick={() => {
                    dispatch(setView(0));
                    dispatch(setProductData(newData));
                }} class="close">Close</a>
            </div>

            <button class="button button2" onClick={() => {
                    dispatch(setView(0));
                    dispatch(setProductData(newData));
                }}>No</button>
        </div>
    );
    
}

var c = 0;
function pop() {
    if (c == 0) {
        document.getElementById("box").style.display = "block";
        c = 1;
    }
}
  
export default Confirmation;