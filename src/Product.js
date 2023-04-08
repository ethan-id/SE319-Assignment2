import { useState } from "react";
import './product.css';

const Product = (product) => {
    let [quantity, setQuantity] = useState(0);

    return (
        <div class="card shadow-sm m-4">
            <img src={product.image} class="image" alt={product.title}></img>
            <div class="card-body">
                <span class="price badge text-bg-primary">{product.price}</span>
                <h4>{product.title}</h4>
                <p class="card-text">{product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button onClick={() => {setQuantity(quantity+1)}} type="button" class="btn btn btn-outline-secondary">+</button>
                        <button onClick={() => {
                            if((quantity - 1) >= 0) {
                                setQuantity(quantity-1)
                            }
                        }} type="button" class="btn btn btn-outline-secondary">-</button>
                        <button type="button" class="btn btn btn-outline-secondary">{quantity}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Product;