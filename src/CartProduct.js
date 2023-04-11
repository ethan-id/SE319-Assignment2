import './styles/product.css';

const CartProduct = (product) => {

    return (
        <div key={product.title} class="container cartProduct">
            <div class="left">
                <img class="cartImage" src={product.image} alt={product.title}/>
                <div class="productText">
                    <div class="h4">{product.title}</div>
                    <div class="">{product.description}</div>
                </div>
            </div>
            <div class="priceInfo">
                <p class={"h2 cartPrice " + (product.quantity > 1 ? 'extra' : '')}>{product.quantity > 1 ? product.quantity + "x": <></>} ${product.price}</p>
                {product.quantity !== 1 ? <p class="h2 cartPrice">${(product.price * product.quantity).toFixed(2)}</p> : <></>}
            </div>
        </div>
    );
}
  
export default CartProduct;