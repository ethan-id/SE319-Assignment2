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

            <div class="d-flex flex-row justify-content-between">
                <div class="col d-flex flex-column my-auto">
                    <div class="mx-auto h1 my-4 fw-bold">Your total is ${localStorage.getItem("total")}</div>
                    <div class="mx-auto mb-4 h5"> Would you like to confirm your order?</div>

                    <div class="row w-50 mx-auto">
                        <button onClick={() => {
                            pop();
                        }} class="btn col btn-primary shadow-lg fs-5 px-5 m-1">Yes</button>

                        <button onClick={() => {
                                dispatch(setView(0));
                                dispatch(setProductData(newData));
                        }} class="btn col btn-secondary shadow-lg fs-5 px-5 m-1">No</button>
                    </div>
                </div>

                <div class="w-70">
                    <div class="h3 fw-bold mt-5 mb-4">Cart Summary </div>
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
                </div>
            </div>

            <div class="shadow-lg" id="box">
                <div class="h1 pb-3">Thank you for your purchase!</div>
                <p>Your order will be delivered within 5-7 business days.</p>
                <button onClick={() => {
                    dispatch(setView(0));
                    dispatch(setProductData(newData));
                }} class="btn btn-primary ">Close</button>
            </div>

        </div>
    );
    
}

var c = 0;
function pop() {
    if (c === 0) {
        document.getElementById("box").style.display = "block";
    }
}
  
export default Confirmation;