import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "./reducers/productDataSlice";
import './styles/product.css';

const Product = (product) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => (state.productData.value));
    const newData = structuredClone(data);

    return (
        <div key={product.title} class="product card shadow-sm">
            <img src={product.image} class="image" alt={product.title}></img>
            <div class="card-body">
                <span class="price badge text-bg-primary my-2">${product.price}</span>
                <h4>{product.title}</h4>
                <p class="card-text">{product.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <div class="btn-group">
                    <button onClick={() => {
                        newData[product.id - 1].quantity++;
                        dispatch(setProductData(newData));
                    }} type="button" class="btn btn btn-outline-secondary">+</button>
                    <button onClick={() => {
                        if (newData[product.id - 1].quantity - 1 >= 0) {
                            newData[product.id - 1].quantity--;
                        }
                        dispatch(setProductData(newData));
                    }} type="button" class="btn btn btn-outline-secondary">-</button>
                    <button type="button" class="disabled px-5 btn btn-outline-secondary">{product["quantity"]}</button>
                </div>
            </div>
        </div>
    );
}
  
export default Product;